import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera/ngx';



const firebaseAuth = {
    apiKey: "AIzaSyD-opaHfZJBmwjqxs3OSVPXXE-hE-PIV9Y",
    authDomain: "food-project-f2728.firebaseapp.com",
    databaseURL: "https://food-project-f2728.firebaseio.com",
    projectId: "food-project-f2728",
    storageBucket: "food-project-f2728.appspot.com",
    messagingSenderId: "310578525822"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
      AngularFireModule.initializeApp(firebaseAuth),
      AngularFireAuthModule,
      IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      Camera
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
