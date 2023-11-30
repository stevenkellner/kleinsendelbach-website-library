import { Injectable } from '@angular/core';
import { CBCDecryptor, CBCEncryptor } from 'aes-ts';
import { Base64 } from 'js-base64';
import { sha512 as cryptSha512 } from 'sha512-crypt-ts';
import { BytesToBitIterator, CombineIterator, RandomBitIterator, addPadding, bitIteratorToBytes, randomBytes, removePadding, unishortBytes, unishortString, xor } from '../types';
import { EnvironmentService } from '../../common/services/environment.service';

export interface CryptionKeys {
    encryptionKey: Uint8Array;
    initialisationVector: Uint8Array;
    vernamKey: Uint8Array;
}

@Injectable({
    providedIn: 'root'
})
export class CrypterService {

    constructor(
        private readonly environmentService: EnvironmentService<{ cryptionKeys: CryptionKeys }>
    ) {}

    public encryptAes(bytes: Uint8Array): Uint8Array {
        const encrypter = new CBCEncryptor(this.environmentService.value('cryptionKeys').encryptionKey, this.environmentService.value('cryptionKeys').initialisationVector);
        return encrypter.encrypt(addPadding(bytes));
    }

    public decryptAes(bytes: Uint8Array): Uint8Array {
        const decrypter = new CBCDecryptor(this.environmentService.value('cryptionKeys').encryptionKey, this.environmentService.value('cryptionKeys').initialisationVector);
        return removePadding(decrypter.decrypt(bytes));
    }

    public encryptVernamCipher(bytes: Uint8Array): Uint8Array {
        const key = randomBytes(32);
        const randomBitIterator = new RandomBitIterator(Uint8Array.from([...key, ...this.environmentService.value('cryptionKeys').vernamKey]));
        const bytesToBitIterator = new BytesToBitIterator(bytes);
        const combineIterator = new CombineIterator(randomBitIterator, bytesToBitIterator, xor);
        return Uint8Array.from([...key, ...bitIteratorToBytes(combineIterator)]);
    }

    public decryptVernamCipher(bytes: Uint8Array): Uint8Array {
        const randomBitIterator = new RandomBitIterator(Uint8Array.from([...bytes.slice(0, 32), ...this.environmentService.value('cryptionKeys').vernamKey]));
        const bytesToBitIterator = new BytesToBitIterator(bytes.slice(32));
        const combineIterator = new CombineIterator(randomBitIterator, bytesToBitIterator, xor);
        return bitIteratorToBytes(combineIterator);
    }

    public encryptVernamAndAes(bytes: Uint8Array): Uint8Array {
        const vernamEncrypted = this.encryptVernamCipher(bytes);
        return this.encryptAes(vernamEncrypted);
    }

    public decryptAesAndVernam(bytes: Uint8Array): Uint8Array {
        const aesDecrypted = this.decryptAes(bytes);
        return this.decryptVernamCipher(aesDecrypted);
    }

    public encodeEncrypt(data: unknown): string {
        const decodedData = JSON.stringify(data) as string | null;
        const dataBytes = unishortBytes(decodedData ?? '');
        const encryptedData = this.encryptVernamAndAes(dataBytes);
        return Base64.fromUint8Array(encryptedData, true);
    }

    public decryptDecode(data: ''): null;
    public decryptDecode<T = unknown>(data: string): T;
    public decryptDecode<T = unknown>(data: string): T | null {
        if (data === '')
            return null;
        const dataBytes = Base64.toUint8Array(data);
        const decryptedData = this.decryptAesAndVernam(dataBytes);
        const decodedData = unishortString(decryptedData);
        return JSON.parse(decodedData) as T;
    }

    public sha512(value: string, key: string | null = null): string {
        const hashedValue = key === null ? cryptSha512.base64(value) : cryptSha512.base64Hmac(key, value);
        return hashedValue.replaceAll('/', '_');
    }
}
