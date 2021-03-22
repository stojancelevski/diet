import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {AlertController, MenuController, ToastController} from "@ionic/angular";
@Component({
  selector: 'app-six',
  templateUrl: './six.page.html',
  styleUrls: ['./six.page.scss'],
})
export class SixPage implements OnInit {
  photos:any;
    public base64Image: string;
  constructor(private camera:Camera,private menu:MenuController,public toastCtrl:ToastController,public alertCtrl:AlertController) { }

  ngOnInit() {
    this.menu.enable(true);
      this.photos = [];

  }
    async  displayToast(message){
        let toast =await this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }
    takePhoto() {

        const options: CameraOptions = {
            quality: 50, // picture quality
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }
        this.camera.getPicture(options).then((imageData) => {
            this.base64Image = "data:image/jpeg;base64," + imageData;
            this.photos.push(this.base64Image);
            this.photos.reverse();
        }, (err) => {
            console.log(err);
        });
    }
       async deletePhoto(index) {
        let confirm = await this.alertCtrl.create({
            header: 'This photo will be deleted!',
            message: 'After this there is no undo!',
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                }, {
                    text: 'Confirm',
                    handler: () => {
                        console.log('Agree clicked');
                        this.photos.splice(index, 1);
                    }
                }
            ]
        });
        confirm.present();
    }

}
