import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule} from './authentication-routing.module';
import { AuthService } from './services/auth.service';
import { CanActivateRouteService } from './services/can-activate-route.service';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ConfirmNewAccountComponent} from './components/confirm-new-account/confirm-new-account.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {MatInputModule} from '@angular/material/input';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';


@NgModule({
  declarations: [
    LoginComponent,
    ConfirmNewAccountComponent,
      ForgotPasswordComponent,
      RegistrationComponent,
      ActivateAccountComponent

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
      CanActivateRouteService
  ]
})
export class AuthenticationModule { }
