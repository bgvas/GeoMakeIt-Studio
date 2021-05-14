import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './services/game.service';
import { GameCreateComponent } from './components/game-create/game-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GameViewComponent } from './components/game-view/game-view.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GameBuildComponent } from './components/game-build/game-build.component';
import { FeaturesModule} from '../features/features.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PluginModule } from '../plugins/plugin.module';
import { GamesComponent } from './components/my-games/games.component';
import { RouterModule } from '@angular/router';
import { PluginsForGamesComponent} from './components/plugins-for-games/plugins-for-games.component';
import { PluginConfigsComponent} from './components/plugins-for-games/plugin-configs/plugin-configs.component';
import { ConfigsComponent} from './components/plugins-for-games/plugin-configs/configs/configs.component';
import { DesignerComponent} from './components/plugins-for-games/plugin-configs/configs/config-designer/designer.component';
import { DataDesignerComponent } from './components/plugins-for-games/plugin-configs/configs/data-designer/data-designer.component';
import { InformationComponent } from './components/plugins-for-games/plugin-configs/information/information.component';
import { StringsComponent } from './components/plugins-for-games/plugin-configs/strings/strings.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {DataFileService} from './services/data-file.service';
import {DesignerService} from './services/designer.service';
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


@NgModule({
    declarations: [
        GameCreateComponent,
        GameBuildComponent,
        GameViewComponent,
        GamesComponent,
        PluginsForGamesComponent,
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
        GameSettingsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        FeaturesModule,
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
        MatButtonModule
    ],
    exports: [
        GameCreateComponent,
        GameSettingsModalComponent
    ],
    providers: [
        GameService,
        DataFileService,
        DesignerService,
        AvailablePluginsService,
        InstalledPluginsService
    ]
})
export class GameModule { }
