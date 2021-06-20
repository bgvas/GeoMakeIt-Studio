import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RegistrationComponent } from './components/registration/registration.component';
import {RouterModule} from '@angular/router';
import { ConfirmNewAccountComponent } from './components/confirm-new-account/confirm-new-account.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';




@NgModule({
    declarations: [
        UserComponent,
        UserProfileComponent,
        RegistrationComponent,
        ConfirmNewAccountComponent,
        ForgotPasswordComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        RouterModule
    ],
    exports: [
        UserProfileComponent,
        UserComponent
    ],
    providers: [
        UserService
    ]
})
export class UserManagementModule { }
