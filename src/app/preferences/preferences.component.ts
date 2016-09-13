import { Component, OnInit, Input } from '@angular/core';
import { Preference } from '../preference';
import { PreferencesService } from './preferences.service';

@Component ({

    selector: 'app-preferences',
    templateUrl: 'preferences.html',
    styleUrls: ['preferences.css'],
    providers: [ PreferencesService ]
})
export class PreferencesComponent implements OnInit {

    @Input()
    userName: string;
    activity: string;
    frequency: number;
    duration: number;
    startTime: Date;
    endTime: Date;

    constructor(private preferencesService: PreferencesService) {
    }

    ngOnInit() {}

    getPreference() {
        this.preferencesService.getPreference(this.userName).then(
            pref => {
                this.userName = pref.userName,
                this.activity = pref.activityName,
                this.frequency = pref.frequencyInMinutes;
                this.duration = pref.duration;
                this.startTime = pref.startTime;
                this.endTime = pref.endTime;
            }
        );
    }

    submitPreference() {
        let pref = new Preference(
            this.userName, this.activity,
            this.frequency, this.duration,
            this.startTime, this.endTime);

        this.preferencesService.savePreference(pref);
    }
}


