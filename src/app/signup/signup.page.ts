import { Component, OnInit } from '@angular/core'; 
import {ToastController,NavController,LoadingController} from '@ionic/angular';
import * as firebase from 'firebase'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {


  email:string;
  password:string;
 
  constructor(private toastCtrl:ToastController,private navCtrl:NavController,private loadingCtrl:LoadingController) { }

  ngOnInit() {
  }

  async loading(){

    let loading=await this.loadingCtrl.create({
      message:"loading...",
      duration:2000,
      showBackdrop:false,
      // spinner:"dots"
      spinner:"bubbles"
      // spinner:"circles"
      // spinner:"crescent"
        //  spinner:"circular"
    
    })
    loading.present();
  }

  signup(){

    this.loading();

    
  
    
    firebase.auth().createUserWithEmailAndPassword(this.email,this.password ).then((userData)=>{
      
        //navigate the user to the app page
        console.log(userData);
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

    })
  }


  gotoSingin(){

    this.navCtrl.navigateForward(['/signin']);
    // this.navCtrl.back();
  }

}
