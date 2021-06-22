import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePluginComponent} from './components/create-plugin/create-plugin.component';
import { PluginsComponent} from './components/my-plugins/plugins.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {RouterModule} from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {PluginService} from './services/plugin.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import { EditPluginComponent } from './components/edit-plugin/edit-plugin.component';




@NgModule({
    declarations: [
        CreatePluginComponent,
        PluginsComponent,
        EditPluginComponent
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
        MatTooltipModule
    ],
    exports: [
        CreatePluginComponent,
        EditPluginComponent
    ],
    providers: [
        PluginService
    ]
})
export class PluginModule { }
