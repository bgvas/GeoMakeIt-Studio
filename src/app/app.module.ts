import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './studio/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { GamesComponent } from './games/games/games.component';
import { PlugInsComponent } from './plugins/my-plugins/plug-ins.component';
import { CreatePluginComponent } from './plugins/create/create-plugin.component';
import {MatInputModule} from '@angular/material/input';
import { CreateGameComponent } from './games/create/create-game.component';
import { ButtonTogglesComponent } from './button-toggles/button-toggles.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import { EditPluginComponent } from './plugins/edit-plugin/edit-plugin.component';
import { DetailsCardComponent } from './details-card/details-card.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatIconModule} from '@angular/material/icon';
import { DeletePopUpComponent } from './delete-pop-up/delete-pop-up.component';
import {MatButtonModule} from '@angular/material/button';
import {AdminLayoutModule} from './layouts/admin-layout/admin-layout.module';
import { Error404Component } from './error404/error404.component';
import { PluginCardComponent } from './plugins/plugin-card/plugin-card.component';
import { PluginsForGamesComponent } from './games/plugins-for-games/plugins-for-games.component';
import { PluginConfigsComponent } from './games/plugins-for-games/plugin-configs/plugin-configs.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { MatTabsModule } from '@angular/material/tabs';
import { InformationComponent } from './games/plugins-for-games/plugin-configs/information/information.component';
import { ConfigsComponent } from './games/plugins-for-games/plugin-configs/configs/configs.component';
import { StringsComponent } from './games/plugins-for-games/plugin-configs/strings/strings.component';
import {GlobalHttpInterceptor} from './global-http.interceptor';
import { DesignerComponent } from './games/plugins-for-games/plugin-configs/configs/config-designer/designer.component';
import { TooltipInfoCircleComponent } from './tooltip-info-circle/tooltip-info-circle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputComponent } from './input/input.component';
import { DataDesignerComponent } from './games/plugins-for-games/plugin-configs/configs/data-designer/data-designer.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoginComponent } from './auth/login/login/login.component';





@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonToggleModule,
    MaterialFileInputModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    AdminLayoutModule,
    MatTabsModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    GamesComponent,
    PlugInsComponent,
    CreatePluginComponent,
    CreateGameComponent,
    ButtonTogglesComponent,
    EditPluginComponent,
    DetailsCardComponent,
    DeletePopUpComponent,
    Error404Component,
    PluginCardComponent,
    PluginsForGamesComponent,
    PluginConfigsComponent,
    TabGroupComponent,
    InformationComponent,
    ConfigsComponent,
    StringsComponent,
    DesignerComponent,
    TooltipInfoCircleComponent,
    InputComponent,
    DataDesignerComponent,
    ErrorHandlingComponent,
    SpinnerComponent,
    LoginComponent

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: GlobalHttpInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
