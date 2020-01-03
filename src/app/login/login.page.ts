import { AppComponent } from "../app.component";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

import { AuthService } from "../sdk/core/auth.service";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../sdk/custom/user.service";
import { NavController, Events, AlertController } from "@ionic/angular";
import * as decode from "jwt-decode";
import { ProductService } from '../sdk/custom/product.service';
import { DataService } from '../services/data.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
    private service: DataService,
    private navController: NavController,
    private appComponent: AppComponent,
    public events: Events,
    public alertController: AlertController
  ) {}
  loginForm: FormGroup;
  loading = false;
  loginError = false;
  errorMsg = "";

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  save() {
    this.loading = true;
    const loginData = this.loginForm.value;
    this.userService.userLogin(loginData).subscribe(
      data => {
        this.authService.saveTokenToStorage(data.token);
        this.service.login = true;
        this.navController.navigateRoot("/app-list");
      },
      error => {
        this.loading = false;
        this.loginError = true;
        this.errorMsg = error.error.message;
        console.log("error", error.error.message);
      }
    );
  }
}
