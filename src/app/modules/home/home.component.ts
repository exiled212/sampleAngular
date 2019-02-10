import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {NgForm} from '@angular/forms';

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
    this.userService.userList((error, users) => {
      if ( error ) {
        this.users = [];
      } else {
        this.users = users;
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
