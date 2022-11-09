import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { DashboardComponent } from './dashboard.component';
const route:Routes = [{
  path:'', component:DashboardComponent
}]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class DashboardModule { }
