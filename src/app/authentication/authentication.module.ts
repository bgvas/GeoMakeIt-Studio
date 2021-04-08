import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule} from './authentication-routing.module';
import { AuthService } from './services/auth.service';
import { CanActivateRouteService } from './services/can-activate-route.service';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [
      AuthService,
      CanActivateRouteService
  ]
})
export class AuthenticationModule { }
