import { Component, OnInit } from '@angular/core';

import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html'

})
export class ChartsComponent implements OnInit {

  constructor( private _chartServiceService: ChartService ) { }

  ngOnInit() {
    this._chartServiceService.getChat('barChart');
    this._chartServiceService.getChat('comboBarLineChart');
    this._chartServiceService.getChat('doughnutChart');
    this._chartServiceService.getChat('pieChart');
    this._chartServiceService.getChat('radarChart');
    this._chartServiceService.getChat('polarAreaChart');
  }
}
