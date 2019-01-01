import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/modules/home/home.component';
import { ChartsComponent } from 'src/app/modules/charts/charts.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';

import { BasicTablesComponent } from 'src/app/modules/basic-tables/basic-tables.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'charts', component: ChartsComponent },

  { path: 'tables.basic', component: BasicTablesComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
