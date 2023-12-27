# Setup

Setup the following services, e.g. in the `AppComponent` constructor:
- `AuthenticationService`
- `EnvironmentService`
- `FirebaseApiService`
- `LinkService`
- `DeviceTypeService`
- `StyleConfigService`
- `RecaptchaVerificationService`

and
```typescript
@HostListener('window:resize') public onResize() {
    this.deviceType.windowResized();
}
```

# Copy assets folder

Add the following to your `angular.json` assets array:
```json
{
    "input": "node_modules/kleinsendelbach-website-library/assets",
    "glob": "**/*",
    "output": "assets"
}
```

# Set styles

Add `node_modules/angular-calendar/css/angular-calendar.css` to your `angular.json` styles array.

# Setup app config

Add the following to your `app.config.ts` providers array:

```typescript
importProvidersFrom(
    CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory
    }),
    AngularFireModule.initializeApp(YOUR_FIREBASE_OPTIONS),
    RecaptchaV3Module
),
{ provide: REGION, useValue: '<YOUR_FUNCTIONS_REGION>' },
{ provide: PERSISTENCE, useValue: '<AUTHENTICATION_PERSISTENCE (none, local, session)>' },
{ provide: RECAPTCHA_V3_SITE_KEY, useValue: '<YOUR_RECAPTCHA_SITE_KEY>' }
```

Add the following to your `app.config.server.ts` providers array:

````typescript
{ provide: WindowService, userClass: ServerWindowService }
``
