import { Injectable } from '@angular/core';
import { Preference } from '../preference';

@Injectable()
export class PreferencesService {

    getPreference(userName: string): Preference{
        return new Preference("", "", 0, 0, null, null);
    }

    savePreference(preference: Preference): void {
        let json = JSON.stringify(preference);
        console.log(json);
    }
}