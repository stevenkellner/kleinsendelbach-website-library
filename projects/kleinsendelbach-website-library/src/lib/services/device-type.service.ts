import { Injectable } from '@angular/core';
import { DeviceType, EventListener } from '../types';
import { WindowService } from './window.service';

@Injectable({
    providedIn: 'root'
})
export class DeviceTypeService {

    public listener = new EventListener<DeviceType>();

    private deviceType: DeviceType = 'desktop';

    constructor(
        private readonly windowService: WindowService
    ) {}

    public setup() {
        this.deviceType = this.computeDeviceType();
    }

    public get current(): DeviceType {
        return this.deviceType;
    }

    public get isMobile(): boolean {
        return this.deviceType === 'mobile';
    }

    public get isTablet(): boolean {
        return this.deviceType === 'tablet';
    }

    public get isDesktop(): boolean {
        return this.deviceType === 'desktop';
    }

    private computeDeviceType(): DeviceType {
        const width = this.windowService.innerWidth;
        if (width <= 480)
            return 'mobile';
        if (width <= 1366)
            return 'tablet';
        return 'desktop';
    }

    public windowResized() {
        const newDeviceType = this.computeDeviceType();
        if (this.deviceType !== newDeviceType) {
            this.deviceType = newDeviceType;
            this.listener.emitValue(newDeviceType);
        }
    }
}
