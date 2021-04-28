import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { UserManagementRoutingModule} from './user-management-routing.module';
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [
        UserComponent,
        UserProfileComponent
    ],
    imports: [
        CommonModule,
        UserManagementRoutingModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule
    ],
    exports: [
        UserProfileComponent,
        UserComponent
    ],
    providers: [UserService]
})
export class UserManagementModule { }
