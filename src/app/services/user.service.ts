import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserLogin} from '../interface/UserLogin';
import {ResponseList} from '../interface/http/Response.List';
import {UserInterface} from '../interface/UserInterface';
import {ResponseLogin} from '../interface/http/Response.Login';
import {ResponseCreate} from '../interface/http/Response.Create';

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
    this.http.post('https://reqres.in/api/login', this.user).toPromise().then((response: ResponseLogin) => {
      localStorage.setItem('token', response.token);
    }).catch((error) => {
      console.log(error);
    });
  }

  public userList(callback) {
    this.http.get('https://reqres.in/api/users').toPromise()
      .then((response: ResponseList) => {
        callback(null, response);
      }).catch((error) => {
        callback(error, null);
      });
  }

  public create(data, callback) {
    console.log(data);
    this.http.post('https://reqres.in/api/users', data).toPromise()
      .then((response: ResponseCreate) => {
        callback(null, response);
      }).catch((error) => {
        callback(error);
    });
  }
}
