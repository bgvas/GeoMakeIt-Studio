import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './services/game.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PluginModule } from '../plugins/plugin.module';
import { RouterModule } from '@angular/router';
import { PluginConfigsComponent} from './components/plugin-configs/plugin-configs.component';
import { ConfigsComponent} from './components/plugin-configs/configs/configs.component';
import { DesignerComponent} from './components/plugin-configs/configs/config-designer/designer.component';
import { DataDesignerComponent } from './components/plugin-configs/configs/data-designer/data-designer.component';
import { InformationComponent } from './components/plugin-configs/information/information.component';
import { StringsComponent } from './components/plugin-configs/strings/strings.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NgbModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { GameSetupComponent } from './components/game-setup/game-setup.component';
import { PointSetupComponent } from './components/point-setup/point-setup.component';
import { GameSettingsModalComponent } from './components/game-settings-modal/game-settings-modal.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {StepperWizardComponent} from './components/stepper-wizard/stepper-wizard.component';
import {MatButtonModule} from '@angular/material/button';
import { GameSettingsComponent } from './components/game-settings/game-settings.component';
import { GameMainConfigurationModalComponent } from './components/game-main-configuration-modal/game-main-configuration-modal.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { GameSetupMainPageComponent } from './components/game-setup-main-page/game-setup-main-page.component';
import {MapComponent} from './components/map/map.component';
import {SharedModule} from '../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { TableWithSelectedPointsComponent } from './components/table-with-selected-points/table-with-selected-points.component';
import {GamePluginsModule} from '../gamePlugins/game-plugins.module';


@NgModule({
    declarations: [
        PluginConfigsComponent,
        ConfigsComponent,
        DesignerComponent,
        DataDesignerComponent,
        InformationComponent,
        StringsComponent,
        GameSetupComponent,
        PointSetupComponent,
        GameSettingsModalComponent,
        GameInfoComponent,
        StepperWizardComponent,
        GameSettingsComponent,
        GameMainConfigurationModalComponent,
        GameSetupMainPageComponent,
        MapComponent,
        TableWithSelectedPointsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonToggleModule,
        PluginModule,
        RouterModule,
        MatTabsModule,
        MatInputModule,
        MatIconModule,
        MatTooltipModule,
        NgbTooltipModule,
        NgbModule,
        MatSelectModule,
        MatStepperModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        SharedModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBEckmuR4cwjzfgkK_JqnzLGyViz1AdKps'
        }),
        GamePluginsModule,
    ],
    exports: [
        GameSettingsModalComponent,
        PointSetupComponent
    ],
    providers: [
        GameService
    ]
})
export class GameModule { }
