import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePluginsRoutingModule } from './game-plugins-routing.module';
import {GamePluginsService} from './services/game-plugins.service';
import {GamePluginDataService} from './services/gamePluginData.service';
import {GamePluginConfigService} from './services/gamePluginConfig.service';
import { GamePluginsComponent } from './game-plugins.component';
import { JsonFilesConfigurationComponent } from './components/json-files-configuration/json-files-configuration.component';
import {MatTabsModule} from '@angular/material/tabs';
import { JsonFilesVisualizationComponent } from './components/json-files-visualization/json-files-visualization.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';
import {MatInputModule} from '@angular/material/input';
import { DesignerTypeOfFieldsComponent} from './components/designer-input-fields/designer-type-of-fields.component';
import { TypeInputFieldComponent } from './components/type-input-field/type-input-field.component';
import { TypeArrayFieldComponent } from './components/type-array-field/type-array-field.component';
import { TypeSelectAndCheckFieldComponent } from './components/type-select-and-check-field/type-select-and-check-field.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {NumberPickerModule} from 'ng-number-picker';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {ReturningResultsService} from './services/returning-results.service';
import { GeomakeitPluginAlertDialogBoxComponent } from './components/geomakeit-plugin-alert-dialog-box/geomakeit-plugin-alert-dialog-box.component';
import { GeomakeitPluginMarkersBoxComponent } from './components/geomakeit-plugin-markers-box/geomakeit-plugin-markers-box.component';
import { GeomakeitPluginQuestsBoxComponent } from './components/geomakeit-plugin-quests-box/geomakeit-plugin-quests-box.component';
import { GeomakeitPluginStartupBoxComponent } from './components/geomakeit-plugin-startup-box/geomakeit-plugin-startup-box.component';
import { SelectedGamePluginsComponent } from './components/selected-game-plugins/selected-game-plugins.component';
import { GeomakeitPluginAlertDialogSetButtonsComponent } from './components/geomakeit-plugin-alert-dialog-set-buttons/geomakeit-plugin-alert-dialog-set-buttons.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { GeomakeitPluginsProjectAuthBoxComponent } from './components/geomakeit-plugins-project-auth-box/geomakeit-plugins-project-auth-box.component';



@NgModule({
    declarations: [
        GamePluginsComponent,
        JsonFilesConfigurationComponent,
        JsonFilesVisualizationComponent,
        DesignerTypeOfFieldsComponent,
        TypeInputFieldComponent,
        TypeArrayFieldComponent,
        TypeSelectAndCheckFieldComponent,
        GeomakeitPluginAlertDialogBoxComponent,
        GeomakeitPluginAlertDialogBoxComponent,
        GeomakeitPluginMarkersBoxComponent,
        GeomakeitPluginQuestsBoxComponent,
        GeomakeitPluginStartupBoxComponent,
        SelectedGamePluginsComponent,
        GeomakeitPluginAlertDialogSetButtonsComponent,
        GeomakeitPluginsProjectAuthBoxComponent

    ],
    imports: [
        CommonModule,
        GamePluginsRoutingModule,
        MatTabsModule,
        MatTooltipModule,
        NgbTooltipModule,
        SharedModule,
        MatInputModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSlideToggleModule,
        NumberPickerModule,
        MatSelectModule,
        MatButtonModule,
        MatExpansionModule
    ],
    exports: [
        JsonFilesConfigurationComponent,
        GeomakeitPluginAlertDialogBoxComponent,
        GeomakeitPluginMarkersBoxComponent,
        GeomakeitPluginQuestsBoxComponent,
        GeomakeitPluginStartupBoxComponent,
        SelectedGamePluginsComponent,
        GeomakeitPluginsProjectAuthBoxComponent
    ],
  providers: [
      GamePluginsService,
      GamePluginDataService,
      GamePluginConfigService,
      ReturningResultsService]
})
export class GamePluginsModule { }
