import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EnvironmentService<Environment extends Record<string, unknown>> {

    private environment: Environment | null = null;

    constructor() {}

    public setup(environment: Environment) {
        if (this.environment)
            throw new Error('Environment service is already set up.');
        this.environment = environment;
    }

    public value<Key extends keyof Environment>(key: Key): Environment[Key] {
        if (!this.environment)
            throw new Error('Environment service not set up, but the environment is requested.');
        return this.environment[key];
    }
}
