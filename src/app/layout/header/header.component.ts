import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  private name: string;

  constructor(private appService: AppService ) {
    this.name = appService.getName();
  }
  ngOnInit() {
  }
}
