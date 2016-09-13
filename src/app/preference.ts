export class Preference {
    userName: string;
    activityName: string;
    frequencyInMinutes: number;
    duration: number;
    startTime: Date;
    endTime: Date;

    constructor(userName:string, activityName: string,
        frequency: number, duration: number, startTime: Date, endTime: Date ) {
            this.userName = userName;
            this.activityName = activityName;
            this.frequencyInMinutes = frequency;
            this.duration = duration;
            this.startTime = startTime;
            this.endTime = endTime;
    }
}