import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {Error404Component} from './shared/components/error404/error404.component';
import {LoginComponent} from './authentication/components/login/login.component';
import {RegistrationComponent} from './authentication/components/registration/registration.component';
import {ForgotPasswordComponent} from './authentication/components/forgot-password/forgot-password.component';
import {StepByStepComponent} from './shared/components/help/step-by-step/step-by-step.component';
import {AdminComponent} from './admin/admin.component';
import {RegistrationResultsComponent} from './authentication/components/registration-results/registration-results.component';
import {GamePluginsComponent} from './gamePlugins/game-plugins.component';
import {GameSettingsComponent} from './games/components/game-settings/game-settings.component';
import {GameComponent} from './games/game.component';
import {AuthenticationComponent} from './authentication/authentication.component';

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
    path: 'games',
    component: GameComponent,
    children: [{
      path: '',
      loadChildren: './games/game.module#GameModule'
    }]
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
    children: [{
      path: '',
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }]
  },
  {
    path: 'gamePlugins',
    component: GamePluginsComponent,
    children: [{
      path: '',
      loadChildren: './gamePlugins/game-plugins.module#GamePluginsModule'
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
    path: 'game-settings',
    component: GameSettingsComponent
  },
  {
    path: 'registration_result',
    component: RegistrationResultsComponent
  },
  {
    path: 'forgot_password',
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
