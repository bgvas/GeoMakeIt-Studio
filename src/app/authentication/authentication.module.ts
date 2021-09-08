import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule} from './authentication-routing.module';
import { AuthService } from './services/auth.service';
import { CanActivateRouteService } from './guards/can-activate-route.service';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ConfirmNewAccountComponent} from '../user-management/components/confirm-new-account/confirm-new-account.component';
import {ForgotPasswordComponent} from '../user-management/components/forgot-password/forgot-password.component';
import {RegistrationComponent} from '../user-management/components/registration/registration.component';
import {MatInputModule} from '@angular/material/input';
import { ActivateAccountComponent } from '../user-management/components/activate-account/activate-account.component';
import {AdminGuardService} from './guards/admin-guard.service';
import {UserGuardService} from './guards/user-guard.service';
import {PluginDeveloperGuardService} from './guards/plugin-developer-guard.service';
import { SocialLoginComponent } from './components/social-login/social-login.component';


@NgModule({
  declarations: [
    LoginComponent,
    ConfirmNewAccountComponent,
      ForgotPasswordComponent,
      RegistrationComponent,
      ActivateAccountComponent,
      SocialLoginComponent

  ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        RouterModule,
        SharedModule,
        MatInputModule
    ],
  providers: [
      AuthService,
      CanActivateRouteService,
      AdminGuardService,
      UserGuardService,
      PluginDeveloperGuardService
  ]
})
export class AuthenticationModule { }
