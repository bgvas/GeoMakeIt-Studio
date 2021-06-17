import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminHomeComponent} from './components/home/adminHome.component';
import {HomeComponent} from '../shared/components/home-page/home.component';
import {CanActivateRouteService} from '../authentication/services/can-activate-route.service';

const routes: Routes = [

  { path: 'home',  component: AdminHomeComponent, canActivate: [CanActivateRouteService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
