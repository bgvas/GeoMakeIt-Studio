import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {Error404Component} from './features/components/error404/error404.component';
import {LoginComponent} from './authentication/components/login/login.component';
import {RegistrationComponent} from './user-management/components/registration/registration.component';
import {ConfirmNewAccountComponent} from './user-management/components/confirm-new-account/confirm-new-account.component';
import {ForgotPasswordComponent} from './user-management/components/forgot-password/forgot-password.component';
import {StepByStepComponent} from './features/components/help/step-by-step/step-by-step.component';
import {StepperWizardComponent} from './games/components/stepper-wizard/stepper-wizard.component';

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
