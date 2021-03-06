import { Component, Input, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { ModalController, ToastController } from "@ionic/angular";
import { ProductService } from "../../sdk/custom/product.service";

@Component({
  selector: "app-add-new-product",
  templateUrl: "./add-new-product.component.html",
  styleUrls: ["./add-new-product.component.scss"]
})
export class AddNewProductComponent implements OnInit {
  images: any;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private productService: ProductService
  ) {}

  addNewProductForm: FormGroup;
  loading = false;
  @Input() product;
  ngOnInit() {
    this.formInitializer();
    if (this.product) {
      // console.log('got product', this.product);
      this.addNewProductForm.patchValue(this.product);
    }
  }

  formInitializer() {
    this.addNewProductForm = this.formBuilder.group({
      _id: [null],
      name: [null, [Validators.required]],
      description: [null],
      price: [null, [Validators.required]],
      date: [new Date(), [Validators.required]],
      is_deleted: [false, [Validators.required]]
    });
  }

  errMsg = "not good";
  async addNew() {
    const observable = await this.productService.addNewProduct(
      this.addNewProductForm.value
    );
    observable.subscribe(
      async data => {
        console.log("got response from server", data);
        const name = this.addNewProductForm.controls["name"].value;
        const toast = await this.toastController.create({
          message: `${name} has been added successfully.`,
          duration: 3500
        });
        toast.present();
        this.loading = false;
        this.addNewProductForm.reset();
      },
      error => {
        this.loading = false;
        this.errMsg = error.msg;
      }
    );
  }
  async updateProduct() {
    const observable = await this.productService.updateProduct(
      this.addNewProductForm.value
    );
    observable.subscribe(
      async data => {
        console.log("got response from server", data);
        const name = this.addNewProductForm.controls["name"].value;
        const toast = await this.toastController.create({
          message: `${name} has been updated successfully.`,
          duration: 3500
        });
        toast.present();
        this.loading = false;
        this.addNewProductForm.reset();
        this.modalCtrl.dismiss();
      },
      error => {
        this.loading = false;
        this.modalCtrl.dismiss();
        console.log("error", error);
      }
    );
  }

  save() {
    this.loading = true;
    if (this.product) {
      this.updateProduct();
    } else {
      this.addNew();
    }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
