import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path:'dashboard',
    loadChildren:()=>{return import('./dashboard/dashboard.module').then((module)=> module.DashboardModule)}
  }

];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports:[RouterModule]
})
export class RouteModule {}
