import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminHomeComponent} from './components/home/adminHome.component';
import {AdminGuardService as AdminGuard} from '../authentication/services/admin-guard.service';

const routes: Routes = [

  { path: 'home',  component: AdminHomeComponent, canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
