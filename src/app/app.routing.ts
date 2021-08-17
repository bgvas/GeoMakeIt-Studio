import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {Error404Component} from './shared/components/error404/error404.component';
import {LoginComponent} from './authentication/components/login/login.component';
import {RegistrationComponent} from './user-management/components/registration/registration.component';
import {ForgotPasswordComponent} from './user-management/components/forgot-password/forgot-password.component';
import {StepByStepComponent} from './shared/components/help/step-by-step/step-by-step.component';
import {AdminComponent} from './admin/admin.component';
import {ConfirmNewAccountComponent} from './user-management/components/confirm-new-account/confirm-new-account.component';
import {ResetPasswordComponent} from './user-management/components/reset-password/reset-password.component';
import {ChangeForgotPasswordComponent} from './user-management/components/change-forgot-password/change-forgot-password.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }, {
    path: 'admin',
    component: AdminComponent,
    children: [{
      path: '',
      loadChildren: './admin/admin.module#AdminModule'
    }]
  },
  {
    path: 'pageNotFound',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: '/pageNotFound'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'confirm',
    component: ConfirmNewAccountComponent
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent
  },
  {
    path: 'changeForgotPassword',
    component: ChangeForgotPasswordComponent
  },
  {
    path: 'guide',
    component: StepByStepComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
