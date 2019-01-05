import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserLogin} from '../interface/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: UserLogin = {
    email: null,
    password: null
  };

  private http: HttpClient;

  constructor( private _http: HttpClient ) {
    this.http = _http;
  }

  public getUser() {
    return this.user;
  }

  public login() {

    this.http.post('http://127.0.0.1:3000/login', this.user).toPromise().then((result: any) => {
      localStorage.setItem('token', result.token);
      localStorage.setItem('auth', result.user);
    }).catch((error) => {
      console.log(error);
    });
  }

}
