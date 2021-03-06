import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';




import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';


// import * as firebase from 'firebase';
// firebase.initializeApp({
//   apiKey: "AIzaSyCkoHWIZomB1rk1p8PGieTVh8R344lXCOw",
//   authDomain: "todo-b382c.firebaseapp.com",
//   // databaseURL: "https://todo-b382c.firebaseio.com",
//   projectId: "todo-b382c",
//   storageBucket: "todo-b382c.appspot.com",
//   messagingSenderId: "700642794490",
//   appId: "1:700642794490:web:488c50965680314ffbe243",
//   measurementId: "G-LMKH13HYGF"
// });

// firebase.firestore().settings({
//   timestampsInSnapshots:true
// });


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    HttpClientModule,
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
