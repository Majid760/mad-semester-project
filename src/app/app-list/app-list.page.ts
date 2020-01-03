import { Component, ViewChild, OnInit } from "@angular/core";
import {
  NavController,
  IonSlides,
  LoadingController,
  ModalController,
  AlertController,
  Events
} from "@ionic/angular";
import { NullVisitor } from "@angular/compiler/src/render3/r3_ast";
import { DataService } from "../services/data.service";
import { ProductService } from "../sdk/custom/product.service";
import { AuthService } from "../sdk/core/auth.service";
import { AddNewProductComponent } from "./add-new-product/add-new-product.component";
import { Observable } from 'rxjs';

@Component({
  selector: "app-app-list",
  templateUrl: "./app-list.page.html",
  styleUrls: ["./app-list.page.scss"]
})
export class AppListPage implements OnInit {
  loading = false;
  login = false;
  products: Products[] = [];
  skeletonlist = [1, 2, 3, 4, 5];

  constructor(
    private navCtrl: NavController,
    private dataService: DataService,
    private loadingCtrl: LoadingController,
    private productService: ProductService,
    private modalController: ModalController,
    private alertController: AlertController,
    private authService: AuthService,
    public service: DataService,
  ) {
    const token = this.authService.getTokenFromStorage();
    if (token == null) {
      this.service.login = false;
    } else {
      this.service.login = true;
    }
    this.getAll();

  }

  async setLoginInfo(data, name) {
    this.login = true;
  }

  public images: any;
  @ViewChild("slider", { static: false }) slider: IonSlides;
  page = 0;

  selectedTab(index) {
    this.slider.slideTo(index);
  }

  ngOnInit() {
    this.login = this.service.login;
  }

  async getAll() {
    this.loading = true;
    const observable = await this.productService.getAllProducts();
    observable.subscribe(
      data => {
        this.products = data.data.docs;
        console.log('data aa gya hy', data);
        this.loading = false;
      },
      err => {
        console.log('err aa agi hy zalim', err);
      }
    );
  }

  gotoAdd() {
    this.navCtrl.navigateForward(["add-book"]);
  }

  openEditPopup(product: Products) {
    this.openAddModal(product);
  }
  async openAddModal(product?: Products) {
    const modal = await this.modalController.create({
      component: AddNewProductComponent,
      componentProps: { product }
    });
    modal.onDidDismiss().then(data => {
      console.log("dismissed", data);
      this.getAll();
    });
    await modal.present();
  }

  getproducts() {}

  gotoDetail(index) {
    this.navCtrl.navigateForward("detail/" + index);
  }

  public async logout() {
    await this.authService.logout();
    this.login = false;
    this.service.login = false;
  }
}

interface Products {
  name: string;
  description: string;
  price: string;
  date: string;
  _id?: string;
  is_deleted: boolean;
}