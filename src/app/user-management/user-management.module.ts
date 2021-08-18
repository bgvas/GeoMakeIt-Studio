import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ChangeForgotPasswordComponent } from './components/change-forgot-password/change-forgot-password.component';


@NgModule({
    declarations: [
        UserComponent,
        UserProfileComponent,
        ResetPasswordComponent,
        ChangePasswordComponent,
        ChangeForgotPasswordComponent
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
        UserComponent,
        ChangePasswordComponent
    ],
    providers: [
        UserService
    ]
})
export class UserManagementModule { }
