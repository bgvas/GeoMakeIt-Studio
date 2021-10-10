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
import {RegistrationResultsComponent} from './components/registration-results/registration-results.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {MatInputModule} from '@angular/material/input';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import {AdminGuardService} from './guards/admin-guard.service';
import {UserGuardService} from './guards/user-guard.service';
import {PluginDeveloperGuardService} from './guards/plugin-developer-guard.service';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { ChangeForgotPasswordComponent } from './components/change-forgot-password/change-forgot-password.component';



@NgModule({
    declarations: [
        LoginComponent,
        RegistrationResultsComponent,
        ForgotPasswordComponent,
        RegistrationComponent,
        ActivateAccountComponent,
        SocialLoginComponent,
        ChangeForgotPasswordComponent

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
    exports: [],
    providers: [
        AuthService,
        CanActivateRouteService,
        AdminGuardService,
        UserGuardService,
        PluginDeveloperGuardService
    ]
})
export class AuthenticationModule { }
