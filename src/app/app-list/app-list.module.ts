import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { AppListPage } from "./app-list.page";
import { AddNewProductComponent } from './add-new-product/add-new-product.component';

const routes: Routes = [
  {
    path: "",
    component: AppListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppListPage, AddNewProductComponent],
  entryComponents: [AddNewProductComponent]
  // declarations: [AppListPage]
})
export class AppListPageModule {}
