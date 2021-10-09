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
import { ResetPasswordComponent } from '../authentication/components/reset-password/reset-password.component';
import { ChangePasswordComponent } from '../authentication/components/change-password/change-password.component';
import { ChangeForgotPasswordComponent } from '../authentication/components/change-forgot-password/change-forgot-password.component';
import {RoleService} from './services/role.service';



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
        UserService,
        RoleService
    ]
})
export class UserManagementModule { }
