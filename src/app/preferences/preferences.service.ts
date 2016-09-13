import { Injectable } from '@angular/core';
import { Preference } from '../preference';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PreferencesService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private getPreferenceUrl = "/GetUserPreference";
    private savePreferenceUrl = "/UpdatePreference";

    constructor(private http: Http) {

    }

    getPreference(userName: string): Promise<Preference> {
        return this.http.get(this.getPreferenceUrl + '/' + userName).toPromise().then(
            response => response.json().data as Preference);
    }

    savePreference(preference: Preference): void {
        let json = JSON.stringify(preference);
        this.http.post(this.savePreferenceUrl, {headers: this.headers});
        
    }
}