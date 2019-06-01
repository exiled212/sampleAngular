import {Component, OnInit} from '@angular/core';
import {UserInterface} from 'src/app/interface/UserInterface';
import {ResponseList} from '../../interface/http/Response.List';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-basic-tables',
  templateUrl: './basic-tables.component.html'
})
export class BasicTablesComponent implements OnInit {

  private users: UserInterface[];

  constructor(private userService: UserService) {
  }

  async ngOnInit() {
    this.userService.userList((error, response: ResponseList) => {
      if (error) {
        console.log(error);
      } else {
        this.users = response.data as UserInterface[];
      }
    });
  }

}
