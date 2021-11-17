import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {AdminLayoutModule} from './layouts/admin-layout/admin-layout.module';
import { MatTabsModule } from '@angular/material/tabs';
import {GlobalHttpInterceptor} from './global-http.interceptor';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserModule } from './user/user.module';
import { AuthenticationModule} from './authentication/authentication.module';
import { PluginModule } from './plugins/plugin.module';
import { SharedModule} from './shared/shared.module';
import { GameModule } from './games/game.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import {AdminModule} from './admin/admin.module';
import { AngularD3CloudModule } from 'angular-d3-cloud';
import {GamePluginsModule} from './gamePlugins/game-plugins.module';
import {UiModule} from './ui/ui.module';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        MaterialFileInputModule,
        MatIconModule,
        MatInputModule,
        MatTooltipModule,
        MatButtonModule,
        AdminLayoutModule,
        MatTabsModule,
        MatProgressBarModule,
        UserModule,
        AuthenticationModule,
        PluginModule,
        SharedModule,
        GameModule,
        NgbModule,
        AdminModule,
        AngularD3CloudModule,
        GamePluginsModule,
        UiModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AdminComponent
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: GlobalHttpInterceptor,
        multi: true,
    }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
