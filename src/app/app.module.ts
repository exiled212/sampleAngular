import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LeftSidebarComponent } from './layout/left-sidebar/left-sidebar.component';
import { ContentComponent } from './layout/content/content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';

// Services
import { AppService } from './services/app.service';
import { ChartsComponent } from './modules/charts/charts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { BasicTablesComponent } from './modules/basic-tables/basic-tables.component';
import { LoginComponent } from './layout/login/login.component';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    ChartsComponent,
    DashboardComponent,
    BasicTablesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [
    AppService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
