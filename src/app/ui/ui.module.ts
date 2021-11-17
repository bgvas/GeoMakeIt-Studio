import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderBarComponent} from './components/header-bar/header-bar.component';
import {FooterBarComponent} from './components/footer-bar/footer-bar.component';
import {HomeComponent} from './components/home-page/home.component';
import {MatIconModule} from '@angular/material/icon';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';
import {UserModule} from '../user/user.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {PluginModule} from '../plugins/plugin.module';



@NgModule({
  declarations: [
    HeaderBarComponent,
    FooterBarComponent,
    HomeComponent
  ],
  exports: [
    HeaderBarComponent,
    FooterBarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NgbDropdownModule,
    SharedModule,
    UserModule,
    MatButtonModule,
    MatTooltipModule,
    PluginModule
  ]
})
export class UiModule { }
