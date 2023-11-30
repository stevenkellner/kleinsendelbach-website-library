import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { CrypterModule } from '../crypter';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireFunctionsModule,
    CrypterModule
  ]
})
export class FirebaseApiModule { }
