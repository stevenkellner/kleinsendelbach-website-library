import { CookieSelectionService } from './cookie-selection.service';
import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { AngularFirePerformance } from '@angular/fire/compat/performance';
import { AnalyticsEventParameters } from '../types/analytics-event';
import { AnalyticsCallOptions, CustomEventName } from '@angular/fire/analytics';

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService implements OnDestroy {

    private isEnabled = false;

    constructor(
        private readonly analytics: AngularFireAnalytics,
        private readonly performance: AngularFirePerformance,
        private readonly cookieSelectionService: CookieSelectionService
    ) {}

    public setup() {
        this.toggleAnalytics(this.cookieSelectionService.cookieSelection.statistics === 'selected');
        this.cookieSelectionService.listener.add('analytics', selection => this.toggleAnalytics(selection.statistics === 'selected'));
    }

    public ngOnDestroy() {
        this.cookieSelectionService.listener.remove('analytics');
    }

    private toggleAnalytics(enabled: boolean) {
        this.isEnabled = enabled;
        void this.analytics.setAnalyticsCollectionEnabled(enabled);
        this.performance.dataCollectionEnabled = new Promise(resolve => resolve(enabled));
        this.performance.instrumentationEnabled = new Promise(resolve => resolve(enabled));
    }

    public async log<Key extends keyof AnalyticsEventParameters>(eventName: Key, eventParams?: AnalyticsEventParameters[Key] & { [key: string]: any }, options?: AnalyticsCallOptions): Promise<void>;
    public async log<T extends string>(eventName: CustomEventName<T>, eventParams?: { [key: string]: any }, options?: AnalyticsCallOptions): Promise<void>;
    public async log(eventName: string, eventParams?: { [key: string]: any }, options?: AnalyticsCallOptions) {
        if (!this.isEnabled)
            return;
        await this.analytics.logEvent(eventName, eventParams, options);
    }
}
