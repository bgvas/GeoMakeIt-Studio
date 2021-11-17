import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginsComponent} from './components/my-plugins/plugins.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {RouterModule} from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import { PluginService} from './services/plugin.service';
import { MatTooltipModule} from '@angular/material/tooltip';
import { EditPluginComponent } from './components/edit-plugin/edit-plugin.component';
import {IdentifierExistsValidatorDirective} from './custom-validators/identifier-exists-validator.directive';
import {MatDialogModule} from '@angular/material/dialog';
import { DisplayPluginsWindowComponent } from './components/display-plugins-window/display-plugins-window.component';
import {SharedModule} from '../shared/shared.module';
import {MatSelectModule} from '@angular/material/select';
import { PluginCardForGameSettingsComponent } from './components/plugin-card-for-game-settings/plugin-card-for-game-settings.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AvailablePluginsModalComponent} from './components/available-plugins-modal/available-plugins-modal.component';
import {MatButtonModule} from '@angular/material/button';
import { SelectReleaseOfPluginComponent } from './components/select-release-of-plugin/select-release-of-plugin.component';
import { PluginCardComponent} from './components/plugin-card/plugin-card.component';


@NgModule({
    declarations: [
        PluginsComponent,
        EditPluginComponent,
        IdentifierExistsValidatorDirective,
        DisplayPluginsWindowComponent,
        PluginCardForGameSettingsComponent,
        AvailablePluginsModalComponent,
        SelectReleaseOfPluginComponent,
        PluginCardComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MaterialFileInputModule,
        MatIconModule,
        MatProgressBarModule,
        RouterModule,
        MatButtonToggleModule,
        MatInputModule,
        MatTooltipModule,
        MatDialogModule,
        SharedModule,
        MatSelectModule,
        DragDropModule,
        MatButtonModule,
        FormsModule
    ],
    exports: [
        EditPluginComponent,
        IdentifierExistsValidatorDirective,
        DisplayPluginsWindowComponent,
        AvailablePluginsModalComponent,
        PluginCardComponent
    ],
    providers: [
        PluginService
    ]
})
export class PluginModule { }
