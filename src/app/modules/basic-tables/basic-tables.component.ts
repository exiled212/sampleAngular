import { Component, OnInit } from '@angular/core';

import { TablesService } from 'src/app/services/tables.service';
import { UserInterface } from 'src/app/interface/UserInterface';

@Component({
  selector: 'app-basic-tables',
  templateUrl: './basic-tables.component.html'
})
export class BasicTablesComponent implements OnInit {

  private users: UserInterface[];

  constructor(private _tablesService: TablesService) { }

  ngOnInit() {
    this.users = this._tablesService.getAll();
  }

}
