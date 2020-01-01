import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../services/data.service';
import {LoadingController} from '@ionic/angular';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  product:any;
  constructor(private activatedRouter:ActivatedRoute,private dataService:DataService,private loadingCtrl:LoadingController) { 

    let id=this.activatedRouter.snapshot.paramMap.get("id");
    console.log(id);
    this.product=dataService.getProduct(id);
  }

  ngOnInit() {
  }


  async loading(){

    let loading=await this.loadingCtrl.create({
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

}
