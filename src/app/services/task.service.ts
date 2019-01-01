import { Injectable } from '@angular/core';
import { TaskInterface } from 'src/app/interface/TaskInterface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private data: TaskInterface[];

  constructor() {
    this.data = [
      {
        'name': 'task 1',
        'value': 95,
        'class': 'primary'
      },	{
        'name': 'task 2',
        'value': 88,
        'class': 'primary'
      },	{
        'name': 'task 3',
        'value': 75,
        'class': 'info'
      },	{
        'name': 'task 4',
        'value': 70,
        'class': 'info'
      },	{
        'name': 'task 5',
        'value': 68,
        'class': 'warning'
      },	{
        'name': 'task 6',
        'value': 65,
        'class': 'warning'
      },	{
        'name': 'task 7',
        'value': 55,
        'class': 'danger'
      },	{
        'name': 'task 8',
        'value': 40,
        'class': 'danger'
      }
    ];
  }

  getTasks() {
    return this.data;
  }
}

