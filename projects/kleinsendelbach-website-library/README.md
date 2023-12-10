# Setup

Setup the following services, e.g. in the `AppComponent` constructor:
- `AuthenticationService`
- `EnvironmentService`
- `FirebaseApiService`
- `InternalLinkService`
- `StyleConfigService`

# How to use calendar

Add the following to your `app.config.ts` providers array:

```typescript
importProvidersFrom(CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory
}))
```

Add `node_modules/angular-calendar/css/angular-calendar.css` to your `angular.json` styles array.
