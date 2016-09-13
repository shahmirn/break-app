import { Component, OnInit } from '@angular/core';

import { Activity } from '../activities-picker';

@Component({
    moduleId: module.id,
    selector: 'activities',
    templateUrl: './activities.template.html'
})
export class Activities implements OnInit {

    public activities: Array<Activity> = new Array();

    constructor() { }

    ngOnInit() { }

    public addActivity(activity: Activity) {
        this.activities.push({
            name: activity.name,
            duration: activity.duration,
            people: 1,
            startTime: new Date()
        });

        console.table(this.activities);
    }

    public increasePeople(activity: Activity) {
        activity.people++;
    }

    public decreasePeople(activity: Activity) {
        activity.people--;
    }
}
