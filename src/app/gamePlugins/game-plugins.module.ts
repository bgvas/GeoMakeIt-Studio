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



@NgModule({
  declarations: [
      GamePluginsComponent,
      JsonFilesConfigurationComponent,
      JsonFilesVisualizationComponent,
      DesignerTypeOfFieldsComponent,
      TypeInputFieldComponent,
      TypeArrayFieldComponent,
      TypeSelectAndCheckFieldComponent
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
        NumberPickerModule
    ],
    exports: [
        JsonFilesConfigurationComponent
    ],
  providers: [
      GamePluginsService,
      GamePluginDataService,
      GamePluginConfigService]
})
export class GamePluginsModule { }
