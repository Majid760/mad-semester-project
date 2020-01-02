import { Component, OnInit } from "@angular/core";
import {ToastController, NavController, AlertController, LoadingController} from "@ionic/angular";
import { DataService } from "../services/data.service";
import { FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.page.html",
  styleUrls: ["./add-book.page.scss"]
})
export class AddBookPage implements OnInit {
  productTitle: string = "";
  productDescription: string;
  productDate: string;
  productOwner: string;
  productIbn: any;
  productEdition: any;
  bokService = new DataService();
  product: any;

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  //loading controller

  async loading() {
    let loading = await this.loadingCtrl.create({
      message: "loading...",
      duration: 2000,
      showBackdrop: false,
      // spinner:"dots"
      spinner: "bubbles"
      // spinner:"circles"
      // spinner:"crescent"
      //  spinner:"circular"
    });
    loading.present();
  }

  addbook() {
    this.loading();

    // alert('kdfjdlkfj');
    alert(this.productOwner);

    //store this offline

    this.product = {
      name: this.productTitle,
      author: this.productOwner,
      ibn: this.productIbn,
      description: this.productDescription,
      version: this.productEdition,
      date: new Date(this.productDate)
    };
    console.log(this.product);

    this.bokService.productsService.push(this.product);

    //store this online

    this.navCtrl.navigateForward(["/app-list"]);
  }
}
