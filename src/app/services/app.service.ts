import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private name = 'Molde angular';

  constructor() {
  }
  getName(): string {
    return this.name;
  }
}
