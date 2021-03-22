import {Component, OnInit} from '@angular/core';
import {AlertController, MenuController} from "@ionic/angular";

@Component({
    selector: 'app-first',
    templateUrl: './first.page.html',
    styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

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
            message: '<li>One bowl of soup or broth, about 10 oz, without noodles. Substitute soup with either milk or\n' +
                '                    yogurt.\n' +
                '                </li>\n' +
                '                <li>Grilled, boiled, stewed, or cooked meat or fish, about 8-9 oz. Substitute with 3 boiled or baked\n' +
                '                    eggs or dairy products (soy products if you’re dairy-free)\n' +
                '                </li>\n' +
                '                <li>One piece of whole wheat bread</li>\n' +
                '                <li>\n' +
                '                    Non-calorie vegetables in large quantities or salad – unlimited quantities but without heavy\n' +
                '                    dressings. Use just one tablespoon of oil and some lemon juice\n' +
                '                </li>',
            buttons: ['OK']
        });

        await alert.present();
    }


    async dinner() {
        const alert = await this.alertController.create({
            header: 'Dinner',
            message: 'Dinner is the same as lunch, but without the soup and the bread. It is mandatory that if the meat is eaten for lunch, same meat is eaten for dinner, and if eggs are eaten for lunch, eggs must be for dinner.'+
            '<li>The span between the meals must be at least four hours and no eating after 8:00 PM, although tea without sugar and water is allowed.</li>',
            buttons: ['OK']
        });

        await alert.present();
    }
    async tips() {
        const alert = await this.alertController.create({
            header: 'Tips',
            message: '<li>Soup is mandatory except when dairy products are consumed. Drink milk or yogurt instead.</li>'+
                '<li>DO NOT mix different types of proteins in one meal or even in a day. If eating chicken for lunch, chicken must be for dinner.</li>'+
                '<li>Consumption of proteins leads to stimulation of gluconeogenesis (sugar glucose production from primary non-carbohydrate sources), which is an important system for obtaining energy for people on a diet.</li>',
            buttons: ['OK']
        });

        await alert.present();
    }

}
