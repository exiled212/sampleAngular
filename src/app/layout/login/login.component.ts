import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserLogin} from '../../interface/UserLogin';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  private user: UserLogin;
  constructor( private userService: UserService) {
    this.user = userService.getUser();
  }

  login(form: NgForm) {
    this.userService.login();
  }

}
