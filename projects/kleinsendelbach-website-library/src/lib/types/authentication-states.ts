import { entries } from "./record-utils";

export type AuthenticationState = 'loading' | 'authenticated' | 'unauthenticated' | 'internalError';

export class AuthenticationStates {
    private readonly states: Record<string, AuthenticationState> = {};

    constructor(allKeys: string[]) {
        for (const key of allKeys)
            this.states[key] = 'loading';
    }

    public setState(key: string, state: AuthenticationState) {
        this.states[key] = state;
    }

    public visisbleState(key: string): AuthenticationState | null {

        // State is shown if it's authenticated
        if (this.states[key] === 'authenticated')
            return 'authenticated';

        // State is shown if all states are unauthenticated and the key is the first state
        const stateEntries = entries(this.states);
        if (stateEntries.length !== 0 && stateEntries[0].key === key && stateEntries.every(entry => entry.value === 'unauthenticated'))
            return 'unauthenticated';

        // State is shown if it's the first state with loading
        if (stateEntries.find(stateEntry => stateEntry.value === 'loading')?.key === key)
            return 'loading';

        // State is shown if it's the first state with internalError
        if (stateEntries.find(stateEntry => stateEntry.value === 'internalError')?.key === key)
            return 'internalError';

        return null;
    }
}
