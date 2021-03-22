import {Component, OnInit} from '@angular/core';
import {MenuController, NavController} from "@ionic/angular";

@Component({
    selector: 'app-five',
    templateUrl: './five.page.html',
    styleUrls: ['./five.page.scss'],
})
export class FivePage implements OnInit {

    constructor(private menu: MenuController, public navCtrl: NavController) {
    }

    ngOnInit() {
        this.menu.enable(true);
    }

    first() {
        this.navCtrl.navigateForward('first');
    }

    second() {
        this.navCtrl.navigateForward('second');
    }

    third() {
        this.navCtrl.navigateForward('third');
    }

    fourth() {
        this.navCtrl.navigateForward('four');
    }


}
