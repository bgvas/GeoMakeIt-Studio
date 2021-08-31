import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './services/game.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule} from '../shared/shared.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PluginModule } from '../plugins/plugin.module';
import { GamesComponent } from './components/my-games/games.component';
import { RouterModule } from '@angular/router';
import { PluginConfigsComponent} from './components/plugin-configs/plugin-configs.component';
import { ConfigsComponent} from './components/plugin-configs/configs/configs.component';
import { DesignerComponent} from './components/plugin-configs/configs/config-designer/designer.component';
import { DataDesignerComponent } from './components/plugin-configs/configs/data-designer/data-designer.component';
import { InformationComponent } from './components/plugin-configs/information/information.component';
import { StringsComponent } from './components/plugin-configs/strings/strings.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {GamePluginDataService} from './services/gamePlugin/gamePluginData.service';
import {GamePluginConfigService} from './services/gamePlugin/gamePluginConfig.service';
import {AvailablePluginsService} from './services/availbable-plugins/available-plugins.service';
import {InstalledPluginsService} from './services/instaled-plugins-of-a-game/installed-plugins.service';
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


@NgModule({
    declarations: [
        GamesComponent,
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
        GameMainConfigurationModalComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        SharedModule,
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
        MatCheckboxModule
    ],
    exports: [
        GameSettingsModalComponent
    ],
    providers: [
        GameService,
        GamePluginDataService,
        GamePluginConfigService,
        AvailablePluginsService,
        InstalledPluginsService
    ]
})
export class GameModule { }
