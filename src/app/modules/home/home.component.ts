import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {UserInterface} from '../../interface/UserInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public users: any = [];
  public newUser: any;
  public userService: any;

  constructor(private theUserService: UserService) {
    this.userService = theUserService;
    this.newUser = {};

  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.userService.userList((error, response) => {
      if ( error ) {
        this.users = [];
      } else {
        this.users = response.data as UserInterface[];
      }
    });
  }

  create(form: NgForm) {
    this.userService.create(this.newUser, (error) => {
      form.onReset();
      this.getList();
    });
  }

  clearForm(form: NgForm) {
    form.onReset();
  }

}
