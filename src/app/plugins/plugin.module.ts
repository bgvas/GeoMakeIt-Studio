import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePluginComponent} from './components/create-plugin/create-plugin.component';
import { PluginsComponent} from './components/my-plugins/plugins.component';
import { EditPluginComponent} from './components/edit-plugin/edit-plugin.component';
import { PluginCardComponent} from './components/plugin-card/plugin-card.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {RouterModule} from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FeaturesModule} from '../features/features.module';
import {MatInputModule} from '@angular/material/input';
import {PluginService} from './services/plugin.service';



@NgModule({
    declarations: [
        CreatePluginComponent,
        PluginsComponent,
        EditPluginComponent,
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
        FeaturesModule,
        MatInputModule
    ],
    exports: [
        PluginCardComponent
    ],
    providers: [
        PluginService
    ]
})
export class PluginModule { }
