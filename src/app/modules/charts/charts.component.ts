import { Component, OnInit } from '@angular/core';

import { ChartServiceService } from 'src/app/services/chart-service.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html'

})
export class ChartsComponent implements OnInit {

  constructor( private _chartServiceService: ChartServiceService ) { }

  ngOnInit() {
    this._chartServiceService.getChat('barChart');
    this._chartServiceService.getChat('comboBarLineChart');
    this._chartServiceService.getChat('doughnutChart');
    this._chartServiceService.getChat('pieChart');
    this._chartServiceService.getChat('radarChart');
    this._chartServiceService.getChat('polarAreaChart');
  }
}
