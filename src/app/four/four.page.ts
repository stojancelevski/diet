import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController} from "@ionic/angular";

@Component({
  selector: 'app-four',
  templateUrl: './four.page.html',
  styleUrls: ['./four.page.scss'],
})
export class FourPage implements OnInit {

    constructor(private menu: MenuController, public alertController: AlertController) {
    }

    ngOnInit() {
        this.menu.enable(true);
    }
    async breakfast() {
        const alert = await this.alertController.create({
            header: 'Breakfast',
            message: '<li>Fruit</li>',
            buttons: ['OK']
        });

        await alert.present();
    }
    async lunch() {
        const alert = await this.alertController.create({
            header: 'Lunch and Dinner',
            message: '<li>Eat only mixed fruits in unlimited amounts.  Fresh fruit is recommended, but baked fruit without sugar is also allowed.' +
                'The span between the meals must be at least two hours and no eating after 8:00 PM, although tea without sugar and water is allowed.</li>',
            buttons: ['OK']
        });

        await alert.present();
    }
    async tips() {
        const alert = await this.alertController.create({
            header: 'Tips',
            message: '<li>Coffee and tea (preferably without sugar and cream) can be consumed in unlimited quantities. You can also drink fresh-squeezed juices.</li>',
            buttons: ['OK']
        });

        await alert.present();
    }

}
