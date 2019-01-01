import { Injectable } from '@angular/core';

import { UserInterface } from 'src/app/interface/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  private users: UserInterface[] = [];

  constructor() {
    this.users = [
      {
        'id': 1,
        'firstname': 'Mark',
        'lastname': 'Otto',
        'username': '@mdo'
      }, {
        'id': 2,
        'firstname': 'Jacob',
        'lastname': 'Thornton',
        'username': '@fat'
      }, {
        'id': 3,
        'firstname': 'Larry',
        'lastname': 'the Bird',
        'username': '@twitter'
      }, {
        'id': 4,
        'firstname': 'Daniel Felipe Ruiz Avella',
        'username': '@mdo',
        'spaceRow': 2
      }
    ];
  }

  getAll() {
    return  this.users;
  }

}
