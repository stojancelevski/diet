import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController} from "@ionic/angular";

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {

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
            header: 'Lunch',
            message: '<li>Cooked pasta seasoned with tomato sauce with vegetables (except starchy vegetables), or pizza with pizza sauce and vegetables but without cheese or meat. ' +
                'Instead of pasta, you can have 2-3 croissants or one soft pretzel or other plain pastry.</li>',


            buttons: ['OK']
        });

        await alert.present();
    }


    async dinner() {
        const alert = await this.alertController.create({
            header: 'Dinner',
            message: 'You can have one or two pieces of pie or 4 squares of a sheet cake. ' +
                ' Substitute with 3-4 ice cream scoops or 4 cookies. In addition, eat one row of dark chocolate (70% cocoa or more).'+
                '<li>The span between the meals must be at least three hours and no eating after 8:00 PM, although tea without sugar and water is allowed.</li>',
            buttons: ['OK']
        });

        await alert.present();
    }
}
