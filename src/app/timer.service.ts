import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
    seconds: number = 0;
    interval;
    play: boolean;
    minutes: number = 0;
    hour: number = 0;
    days: number = 0;
    goal: number = 90;
    percentage: any;
    value: any;
    isenabled:boolean=true;
  constructor() {
      console.log('Hello from provider');
  }
    setPercentage() {
        this.percentage = (this.days / this.goal) * 100;
        let value = Math.trunc(this.percentage);
        this.percentage = value;
    }
    timer() {
        this.play = true;
        this.setPercentage();

        this.interval = setInterval(() => {
            if (this.play == false) {
                this.isenabled=true;
                clearInterval(this.interval);
                console.log(this.play);
            }
            else {
                this.isenabled=false;
                this.seconds++;
                console.log(this.seconds);
                if (this.seconds == 60) {
                    this.minutes++;
                    this.seconds = 0;
                    console.log('Minutes:' + this.minutes);
                }
                if (this.minutes == 60) {
                    this.hour++;
                    this.minutes = 0;
                    console.log('Hours:' + this.hour);
                }
                if (this.hour == 24) {
                    this.days++;
                    this.hour = 0;
                    this.setPercentage();
                    console.log('Days:' + this.days);
                }
                if (this.days == this.goal) {
                    this.play = false;
                    console.log("You reached your goal of 90 days");
                    console.log(this.play);
                    this.seconds=0;
                    this.minutes=0;
                    this.hour=0;
                    this.days=0;
                }
            }
        }, 1000)


    }

}
