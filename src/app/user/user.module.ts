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
import {RoleService} from './services/role.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
    declarations: [
        UserComponent,
        UserProfileComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        RouterModule,
        MatSlideToggleModule
    ],
    exports: [
        UserProfileComponent,
        UserComponent
    ],
    providers: [
        UserService,
        RoleService
    ]
})
export class UserModule { }
