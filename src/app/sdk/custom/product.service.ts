import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './../core/auth.service';
import { MyShopConfig } from '../myshopconfig.config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient, private authService: AuthService) { }
  selectedProduct: any;

  public async getAllProducts(): Promise<any> {
    const url = MyShopConfig.getPath() + '/products';
    // const token = await this.authService.getTokenFromStorage();
    return this.http.get(url);
  }

  public async addNewProduct(data: object): Promise<any> {
    console.log("asdfghjklkjhgfdsdfghjkjhgfdsdfghj:", data);
    const url = MyShopConfig.getPath() + '/products/add';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async updateProduct(data): Promise<any> {
    const url = MyShopConfig.getPath() + `/product/${data._id}`;
    // const token = await this.authService.getTokenFromStorage();
    const token = 'blabla';
    return this.http.put(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async deleteProduct(id: string): Promise<any> {
    const url = MyShopConfig.getPath() + `/products/${id}`;
    const token = await this.authService.getTokenFromStorage();

    return this.http.delete(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
}
