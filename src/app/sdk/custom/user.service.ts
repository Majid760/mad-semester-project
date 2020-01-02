import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MyShopConfig } from '../myshopconfig.config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  public userLogin(credentials: object): Observable<any> {
    // this url will be http://localhost:3000/users/login
    const url = MyShopConfig.getPath() + '/users/login';
    return this.http.post(url, credentials);
  }

  public userRegister(credentials: object): Observable<any> {
    const url = MyShopConfig.getPath() + '/users/register';
    return this.http.post(url, credentials);
  }
}