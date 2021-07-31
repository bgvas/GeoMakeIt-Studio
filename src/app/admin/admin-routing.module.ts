import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminHomeComponent} from './components/home/adminHome.component';
import {AdminGuardService as AdminGuard} from '../authentication/guards/admin-guard.service';
import {UserManagementComponent} from './components/user-management/user-management.component';
import {EditUserComponent} from './components/user-management/edit-user/edit-user.component';
import {CreateUserComponent} from './components/user-management/create-user/create-user.component';
import {ProjectManagementComponent} from './components/project-management/project-management.component';
import {PluginManagementComponent} from './components/plugin-management/plugin-management.component';

const routes: Routes = [

  { path: 'home',  component: AdminHomeComponent, canActivate: [AdminGuard]},
  { path: 'users',  component: UserManagementComponent, canActivate: [AdminGuard]},
  { path: 'users/edit',  component: EditUserComponent, canActivate: [AdminGuard]},
  { path: 'users/new',  component: CreateUserComponent, canActivate: [AdminGuard]},
  { path: 'projects',  component: ProjectManagementComponent, canActivate: [AdminGuard]},
  { path: 'plugins',  component: PluginManagementComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
