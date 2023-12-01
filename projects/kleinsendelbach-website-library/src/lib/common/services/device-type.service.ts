import { EventListener } from '../types/event-listener';
import { Injectable } from '@angular/core';

export type DeviceType = 'desktop' | 'mobile' | 'tablet';

@Injectable({
    providedIn: 'root'
})
export class DeviceTypeService {

    public listener = new EventListener<DeviceType>();

    private deviceType: DeviceType;

    constructor() {
        this.deviceType = DeviceTypeService.computeDeviceType();
    }

    public get current(): DeviceType {
        return this.deviceType;
    }

    public get isMobile(): boolean {
        return this.deviceType === 'mobile';
    }

    public get isTable(): boolean {
        return this.deviceType === 'tablet';
    }

    public get isDesktop(): boolean {
        return this.deviceType === 'desktop';
    }

    private static computeDeviceType(): DeviceType {
        const width = window.innerWidth;
        if (width <= 480)
            return 'mobile';
        if (width <= 1366)
            return 'tablet';
        return 'desktop';
    }

    public windowResized() {
        const newDeviceType = DeviceTypeService.computeDeviceType();
        if (this.deviceType !== newDeviceType) {
            this.deviceType = newDeviceType;
            this.listener.emitValue(newDeviceType);
        }
    }
}
