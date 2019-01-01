import { Injectable } from '@angular/core';
import { ChartInterface } from '../interface/ChartInterface';
import { Chart } from 'src/main/js/Chart.min.js';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private chartCtx: HTMLCanvasElement;
  private chartData: ChartInterface;

  private data: object;

  constructor() {
    this.data = {
      'lineChart': {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Dataset 1',
            backgroundColor: '#3EB9DC',
            data: [10, 14, 6, 7, 13, 9, 13, 16, 11, 8, 12, 9]
          }, {
            label: 'Dataset 2',
            backgroundColor: '#EBEFF3',
            data: [12, 14, 6, 7, 13, 6, 13, 16, 10, 8, 11, 12]
          }]
        },
        options: {
          tooltips: {
            mode: 'index',
            intersect: false
          },
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
            }],
            yAxes: [{
              stacked: true
            }]
          }
        }
      },
      'pieChart': {
        type: 'pie',
        data: {
          datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            label: 'Dataset 1'
          }],
          labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
          ]
        },
        options: {
          responsive: true
        }
      },
      'barChart': {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Amount received',
            data: [12, 19, 3, 5, 10, 5, 13, 17, 11, 8, 11, 9],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      },
      'comboBarLineChart': {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            type: 'line',
            label: 'Dataset 1',
            borderColor: '#484c4f',
            borderWidth: 3,
            fill: false,
            data: [12, 19, 3, 5, 2, 3, 13, 17, 11, 8, 11, 9],
          }, {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: '#FF6B8A',
            data: [10, 11, 7, 5, 9, 13, 10, 16, 7, 8, 12, 5],
            borderColor: 'white',
            borderWidth: 0
          }, {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: '#059BFF',
            data: [10, 11, 7, 5, 9, 13, 10, 16, 7, 8, 12, 5],
          }],
          borderWidth: 1
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      },
      'doughnutChart': {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            label: 'Dataset 1'
          }],
          labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
          ]
        },
        options: {
          responsive: true
        }
      },
      'radarChart': {
        type: 'radar',
        data: {
          labels: [['Eating', 'Dinner'], ['Drinking', 'Water'], 'Sleeping', ['Designing', 'Graphics'], 'Coding', 'Running'],
          datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'red',
            data: [12, 19, 13, 11, 19, 17]
          }, {
            label: 'My Second dataset',
            backgroundColor: 'rgba(250, 80, 112, 0.3)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'blue',
            data: [15, 12, 14, 15, 9, 11]
          }, ]
        },
        options: {
          responsive: true
        }
      },
      'polarAreaChart': {
        type: 'polarArea',
        data: {
          labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
          datasets: [{
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(255, 205, 86)', 'rgb(201, 203, 207)', 'rgb(54, 162, 235)']
          }]
        }
      }
    };
  }
  getChat(name: string): Chart {
    this.chartCtx = document.getElementById(name) as HTMLCanvasElement;
    this.chartData = this.data[name];
    return new Chart(this.chartCtx, this.chartData);
  }
}
