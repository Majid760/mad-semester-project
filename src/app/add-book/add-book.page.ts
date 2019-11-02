import { Component, OnInit } from '@angular/core';
import{ToastController,NavController,AlertController,LoadingController} from '@ionic/angular';
import { DataService } from '../services/data.service';
import {FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage implements OnInit {


   bookTitle:string="";
   bookDescription:string;
   bookIbn:string;
   bookAuthor:string;
   bookEdition:string;
   bookDate:string;
   bookOwner:string;
  

   bokService=new DataService();
  book:any;

  constructor(private navCtrl:NavController,private toastCtrl:ToastController,private loadingCtrl:LoadingController) { 
    this.bookOwner=firebase.auth().currentUser.uid;
  }

  
  
  ngOnInit() {
  }



     //loading controller

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


  addbook(){

    this.loading();
    
    // alert('kdfjdlkfj');
    alert(this.bookAuthor);

    //store this offline
    
    
    this.book={
      name:this.bookTitle,
      author:this.bookAuthor,
      ibn:this.bookIbn,
      description:this.bookDescription,
      version:this.bookEdition,
      date:new Date(this.bookDate),
      }
      console.log(this.book);
      
      this.bokService.booksService.push(this.book);
    


   



    //store this online

    firebase.firestore().collection("books").add({
      title:this.bookTitle,
      author:this.bookAuthor,
      ibn:this.bookIbn,
      bookedition:this.bookEdition,
      description:this.bookDescription,
      date:new Date(this.bookDate),
      created:firebase.firestore.FieldValue.serverTimestamp()
      
    }).then((docRef)=>{
      this.toastCtrl.create({
        message:"Book has been added!",
        duration:3000
      }).then((toast)=>{
        toast.present();
        this.navCtrl.navigateBack(['app-list']);

      })
    }).catch((err)=>{
      this.toastCtrl.create({
        message:err.message,
        duration:3000
      }).then((toast)=>{
        toast.present();
        
      })

    })

    this.toast();

    this.navCtrl.navigateForward(['/app-list']);


   

  }

  async toast(){

    let toasting=await this.toastCtrl.create({
      message:"Your book has been added to the list!",
      duration:2000,
      color:"light",
      showCloseButton:true,
      closeButtonText:"Close",
      position:"bottom"
    })
    toasting.present();
  }



}
