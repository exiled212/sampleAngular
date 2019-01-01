import {Component, OnInit} from '@angular/core';

import { MessageInterface } from 'src/app/interface/MessageInterface';
import { TaskInterface } from 'src/app/interface/TaskInterface';

import { UserMessageService } from 'src/app/services/user-message.service';
import { ChartService } from 'src/app/services/chart.service';
import { TaskService } from 'src/app/services/task.service';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public dtOptions: DataTables.Settings = {};
  public progresBarData: TaskInterface[];

  private messages: MessageInterface[] = [];

  constructor(
    private _userMessageService: UserMessageService,
    private _chartServiceService: ChartService,
    private _taskServiceService: TaskService,
    private _staffService: StaffService
  ) {
  }

  ngOnInit() {
    this._chartServiceService.getChat('lineChart');
    this._chartServiceService.getChat('pieChart');
    this._chartServiceService.getChat('doughnutChart');

    this.dtOptions = this._staffService.getList();

    this.progresBarData = this._taskServiceService.getTasks();
    this.messages = this._userMessageService.getMessages();
  }
}
