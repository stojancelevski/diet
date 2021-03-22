import {Component} from '@angular/core';
import {MenuController, NavController} from "@ionic/angular";
import {TimerService} from "../timer.service";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    play: boolean;
    isenabled:boolean;

    percentage: any;


    constructor(private menu: MenuController,private time:TimerService,public navCtrl:NavController) {

    }

    ngOnInit() {
        this.menu.enable(true);
    }

    timerr() {
        this.time.timer();
            this.percentage=this.time.percentage;
    }

    dayPage(){

            this.navCtrl.navigateRoot('five');

    }




}
