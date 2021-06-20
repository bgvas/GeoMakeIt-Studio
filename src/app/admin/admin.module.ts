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





@NgModule({
  declarations: [
    AdminHeadBarComponent,
    AdminSideBarComponent,
    AdminHomeComponent
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
        MatListModule
],
  providers: [
      AdminService
  ]
})
export class AdminModule { }
