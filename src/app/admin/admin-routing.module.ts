import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminHomeComponent} from './components/home/adminHome.component';
import {AdminGuardService as AdminGuard} from '../authentication/services/admin-guard.service';
import {UserManagementComponent} from './user-management/user-management.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';

const routes: Routes = [

  { path: 'home',  component: AdminHomeComponent, canActivate: [AdminGuard]},
  { path: 'users',  component: UserManagementComponent, canActivate: [AdminGuard]},
  { path: 'users/edit',  component: EditUserComponent, canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
