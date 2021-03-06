import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UserService } from "../sdk/custom/user.service";
import {
  ToastController,
  NavController,
  LoadingController
} from "@ionic/angular";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"]
})
export class SignupPage implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private navController: NavController
  ) {}
  registerForm: FormGroup;
  loading = false;

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.registerForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      role: ["customer"],
      password: ["", [Validators.required, Validators.minLength(5)]],
      confirm_password: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          this.matchOtherValidator("password")
        ]
      ]
    });
  }

  signup() {
    this.loading = true;
    this.userService.userRegister(this.registerForm.value).subscribe(
      async data => {
        this.loading = false;
        this.navController.navigateBack("/login");
      },
      error => {
        this.loading = false;
      }
    );
  }

  matchOtherValidator(otherControlName: string) {
    return (control: AbstractControl): { [key: string]: any } => {
      const otherControl: AbstractControl = control.root.get(otherControlName);

      if (otherControl) {
        const subscription: Subscription = otherControl.valueChanges.subscribe(
          () => {
            control.updateValueAndValidity();
            subscription.unsubscribe();
          }
        );
      }

      return otherControl && control.value !== otherControl.value
        ? { match: true }
        : null;
    };
  }
}
