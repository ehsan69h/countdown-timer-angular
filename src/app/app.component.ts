import { Component, Input, ElementRef } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    tillDate;
    dateFormat;

    title = 'countdown-timer-angular';
    interval;

    days;
    hours;
    minutes;
    seconds;

    daysRadius;
    hoursRadius;
    minutesRadius;
    secondsRadius;

    startInterval() {
        this.interval = setInterval(() => {
            const then = moment(this.tillDate, this.dateFormat);
            const now = moment();
            const countdown = moment(then.diff(now));
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');
            console.log('startInterval :', { days, hours, minutes, seconds });

            this.days = days;
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;

            this.daysRadius = this.mapNumber(days, 30, 0, 0, 360);
            this.hoursRadius = this.mapNumber(hours, 24, 0, 0, 360);
            this.minutesRadius = this.mapNumber(minutes, 60, 0, 0, 360);
            this.secondsRadius = this.mapNumber(seconds, 60, 0, 0, 360);
        }, 1000);
    }
    endInterval() {}
    constructor(private elementRef: ElementRef) {
        // read element attribute from HTML instead of inputs
        this.tillDate = this.elementRef.nativeElement.getAttribute('tillDate');
        this.dateFormat = this.elementRef.nativeElement.getAttribute(
            'dateFormat'
        );
        console.log('construtor : ', this.tillDate, this.dateFormat);
        this.startInterval();
    }

    // Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    mapNumber(number, in_min, in_max, out_min, out_max) {
        return (
            ((number - in_min) * (out_max - out_min)) / (in_max - in_min) +
            out_min
        );
    }
}
