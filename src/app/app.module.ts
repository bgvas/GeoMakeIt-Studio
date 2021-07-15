import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './templateTools/components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {AdminLayoutModule} from './layouts/admin-layout/admin-layout.module';
import { TabGroupComponent } from './templateTools/tab-group/tab-group.component';
import { MatTabsModule } from '@angular/material/tabs';
import {GlobalHttpInterceptor} from './global-http.interceptor';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserManagementModule } from './user-management/user-management.module';
import { AuthenticationModule} from './authentication/authentication.module';
import { PluginModule } from './plugins/plugin.module';
import { SharedModule} from './shared/shared.module';
import { GameModule } from './games/game.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import {AdminModule} from './admin/admin.module';




@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
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
        UserManagementModule,
        AuthenticationModule,
        PluginModule,
        SharedModule,
        GameModule,
        NgbModule,
        AdminModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        TabGroupComponent,
        ErrorHandlingComponent,
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
