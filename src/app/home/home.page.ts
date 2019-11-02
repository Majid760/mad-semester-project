import { Component } from '@angular/core';
import {LoadingController,ToastController,AlertController,NavController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
 
})
export class HomePage {

users = {
  id:[3309,3310,3311,3312,3313,3314,3315,3316],
  name:['Majdi Ali Khan','Sajid Khan','Uzair Daniyal','Noori','Mudassir Iqbal','Tariq Faqira','Ahmed'],
  program:['BS Software','Bs IT','BS Computer Science','Bs Software','BS Computer Science','Bs IT']
};
  constructor(private laodingCtrl:LoadingController,private toastCtrl:ToastController,private altCtrl:AlertController ,private navCtrl:NavController) {
   
  }


  async loading(){

    let loading=await this.laodingCtrl.create({
      message:"loading...",
      duration:5000,
      showBackdrop:false,
      // spinner:"dots"
      // spinner:"bubbles"
      // spinner:"circles"
      // spinner:"crescent"
         spinner:"circular"
    
    })
    loading.present();
  }

  async toast(){

    let toasting=await this.toastCtrl.create({
      message:"This is a toast notification",
      duration:5000,
      color:"light",
      showCloseButton:true,
      closeButtonText:"Close",
      position:"bottom"
    })
    toasting.present();
  }
  

  async showalert (){

    let alerting=await this.altCtrl.create({
      header:"Are you sure?",
      subHeader:"This action cannot be undone",
      message:"Are you sure that you want to delete this entry from the database? This process is not reversible.",
      buttons:[
        {
        text:"Cancel",
        handler:()=>{
          // window.alert("No not Deleted!")

        }
      },
      // {
      //   text:"Delete",
      //   handler:()=>{
      //     // window.alert("Yes Deleted!")
      //   }
      // },
      {
        text:"Submit",
        handler:(data)=>{
          // window.alert("Yes submitted")
          console.log(data);
        }
      }
    ],
    inputs:[{
      name:"username",
      type:"text",
      placeholder:"name here",
    },
    {
      name:"email",
      type:"email",
      placeholder:"example@xyz.com",
    }
  ]

    })
    alerting.present();
  }

  navigateBooks(){

    this.navCtrl.navigateForward("/books/12345");
    
  }

  signing(){
    window.alert('kdjf');
    this.navCtrl.navigateForward("/signin/99999");
  }
} 
