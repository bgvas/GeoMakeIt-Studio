import { NgModule } from '@angular/core';
import { GameRoutes} from './game.routing';
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
import { PointSetupComponent } from './components/point-setup/point-setup.component';
import { GameInfoComponent } from './components/game-setup-ui/game-info/game-info.component';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {StepperWizardComponent} from './components/stepper-wizard/stepper-wizard.component';
import {MatButtonModule} from '@angular/material/button';
import { GameSettingsComponent } from './components/game-settings/game-settings.component';
import { GameMainConfigurationComponent } from './components/game-main-configuration/game-main-configuration.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MapComponent} from './components/map/map.component';
import {SharedModule} from '../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { TableWithSelectedPointsComponent} from './components/table-with-selected-points/table-with-selected-points.component';
import {GamePluginsModule} from '../gamePlugins/game-plugins.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {GameComponent} from './game.component';
import { GameSetupSideBarComponent } from './components/game-setup-ui/game-setup-side-bar/game-setup-side-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { GameSettingsTabGroupComponent } from './components/game-setup-ui/game-settings-tab-group/game-settings-tab-group.component';
import { BuildComponent } from './components/build/build.component';
import {UiModule} from '../ui/ui.module';
import { BasicSettingsComponent } from './components/basic-settings/basic-settings.component';











@NgModule({
    declarations: [
        PluginConfigsComponent,
        ConfigsComponent,
        DesignerComponent,
        DataDesignerComponent,
        InformationComponent,
        StringsComponent,
        PointSetupComponent,
        GameInfoComponent,
        StepperWizardComponent,
        GameSettingsComponent,
        GameMainConfigurationComponent,
        MapComponent,
        TableWithSelectedPointsComponent,
        GameComponent,
        GameSetupSideBarComponent,
        GameSettingsTabGroupComponent,
        BuildComponent,
        BasicSettingsComponent
    ],
    imports: [
        RouterModule.forChild(GameRoutes),
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
        MatSidenavModule,
        GamePluginsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBEckmuR4cwjzfgkK_JqnzLGyViz1AdKps'
        }),
        DragDropModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatListModule,
        UiModule

    ],
    exports: [
        PointSetupComponent,
        DesignerComponent
    ],
    providers: [
        GameService
    ]
})
export class GameModule { }
