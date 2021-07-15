import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHeadBarComponent } from './components/shared/admin-head-bar/admin-head-bar.component';
import { AdminSideBarComponent } from './components/shared/admin-side-bar/admin-side-bar.component';
import {AdminService} from './services/admin.service';
import {AdminHomeComponent} from './components/home/adminHome.component';
import {SharedModule} from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { UserManagementComponent } from './user-management/user-management.component';
import { UsersListComponent } from './components/shared/users-list/users-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserDetailsTableComponent } from './components/shared/user-details-table/user-details-table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';





@NgModule({
  declarations: [
    AdminHeadBarComponent,
    AdminSideBarComponent,
    AdminHomeComponent,
    UserManagementComponent,
    UsersListComponent,
    EditUserComponent,
    UserDetailsTableComponent,
    CreateUserComponent
  ],
  exports: [
    AdminHeadBarComponent,
    AdminSideBarComponent,
    AdminHomeComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [
      AdminService
  ]
})
export class AdminModule { }
