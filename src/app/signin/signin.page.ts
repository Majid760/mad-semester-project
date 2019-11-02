import { Component, OnInit } from '@angular/core';
import {ToastController,NavController,LoadingController} from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  email:string;
  password:string;
  constructor(private toastCtrl:ToastController,private navCtrl:NavController,private loadingCtrl:LoadingController) {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
          this.navCtrl.navigateForward(['/app-list']);
      }else{

      }
    })

    this.loading();
   }

  ngOnInit() {
  }

  async loading(){

    let loading=await this.loadingCtrl.create({
      message:"loading...",
      duration:1000,
      showBackdrop:false,
      // spinner:"dots"
      spinner:"bubbles"
      // spinner:"circles"
      // spinner:"crescent"
        //  spinner:"circular"
    
    })
    loading.present();
  }

  login(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((userObject)=>{
      console.log(userObject);
      this.navCtrl.navigateForward(['/app-list']);

    }).catch((err)=>{

      this.toastCtrl.create({
        message:err.message,
        duration:2000,
        color:"danger",
        showCloseButton:true,
        closeButtonText:"Close",
        position:"bottom"
      }).then((toast)=>{
        toast.present();
      })

    });
  }

  gotoSingup(){

    this.navCtrl.navigateForward(['/signup']);

  }
}
