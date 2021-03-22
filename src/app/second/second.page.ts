import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController} from "@ionic/angular";

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

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
            message: '<li>A full plate of any starch-rich foods such as beans, peas, chickpeas, soybeans, lentils, rice, corn, wheat, millet, cereal, and potatoes. They are cooked in the form of a soup with only the addition of spices\n</li>' +
                '<li>One piece of whole wheat bread\n</li>' +
                '<li>Salad – unlimited but without dressings, just one tablespoon of oil and some lemon juice</li>',
            buttons: ['OK']
        });

        await alert.present();
    }
    async dinner() {
        const alert = await this.alertController.create({
            header: 'Dinner',
            message: 'Dinner is half the size of lunch but without the bread.'+'<li>The span between the meals must be at least three hours and no eating after 8:00 PM, although tea without sugar and water is allowed.\n</li>',
            buttons: ['OK']
        });

        await alert.present();
    }

}
