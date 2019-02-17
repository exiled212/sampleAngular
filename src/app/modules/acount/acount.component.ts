import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {UserInterface} from '../../interface/UserInterface';

@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html'
})
export class AcountComponent implements OnInit {

  public users: UserInterface[];

  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {

    this.userService.userList((users: UserInterface[]) => {
      this.users = users;
    });

  }

}
