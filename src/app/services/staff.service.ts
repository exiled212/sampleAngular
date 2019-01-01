import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  constructor() { }

  getList() {
    return {
      ajax: 'assets/data/staff.json',
      columns: [
        {
          title: 'Nombre',
          data: 'name'
        }, {
          title: 'Posicion',
          data: 'position'
        }, {
          title: 'Oficio',
          data: 'office'
        }, {
          title: 'Edad',
          data: 'age'
        }, {
          title: 'Inicio',
          data: 'start_date'
        }, {
          title: 'Salario',
          data: 'salary'
        }
      ]
    };
  }
}
