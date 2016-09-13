import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'activities-picker',
    templateUrl: './activities-picker.template.html'
})
export class ActivitiesPicker implements OnInit {
    public activity: Activity = <Activity>{};

    private onSubmitClickBK: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    public onSubmit() {
        this.onSubmitClickBK.emit(this.activity);
    }

    @Output() public get submit(): Observable<any> {
        return this.onSubmitClickBK.asObservable();
    }
}

interface Activity {
    name: String;
    duration: number;
}
