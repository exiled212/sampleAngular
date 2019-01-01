import { Injectable } from '@angular/core';
import { MessageInterface } from 'src/app/interface/MessageInterface';

@Injectable({
  providedIn: 'root'
})
export class UserMessageService {
  private _messages: MessageInterface[];
  constructor() {
    this._messages = [
      {
        'name': 'John Doe',
        'image': 'avatar1.png',
        'message': 'Hello. I want to buy your product',
        'hour': '11:50 PM'
      },	{
        'name': 'Ashton Cox',
        'image': 'avatar2.png',
        'message': 'Great job for this task',
        'hour': '14:25 PM'
      },	{
        'name': 'Colleen Hurst',
        'image': 'avatar3.png',
        'message': 'I have a new project for you',
        'hour': '13:20 PM'
      },	{
        'name': 'Fiona Green',
        'image': 'avatar4.png',
        'message': 'Nice to meet you',
        'hour': '15:45 PM'
      },	{
        'name': 'Donna Snider',
        'image': 'avatar5.png',
        'message': 'I have a new project for you',
        'hour': '15:45 AM'
      },	{
        'name': 'Garrett Winters',
        'image': 'avatar6.png',
        'message': 'I have a new project for you',
        'hour': '15:45 AM'
      },	{
        'name': 'Herrod Chandler',
        'image': 'avatar7.png',
        'message': 'Hello! I\'m available for this job',
        'hour': '15:45 AM'
      },	{
        'name': 'Jena Gaines',
        'image': 'avatar8.png',
        'message': 'I have a new project for you',
        'hour': '15:45 AM'
      },	{
        'name': 'Airi Satou',
        'image': 'avatar9.png',
        'message': 'I have a new project for you',
        'hour': '15:45 AM'
      },	{
        'name': 'Brielle Williamson',
        'image': 'avatar10.png',
        'message': 'I have a new project for you',
        'hour': '15:45 AM'
      }
    ];
  }

  getMessages() {
    return this._messages;
  }

}
