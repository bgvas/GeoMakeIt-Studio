import {Routes} from '@angular/router';
import {GameComponent} from './game.component';
import {UserGuardService as UserGuard} from '../authentication/guards/user-guard.service';
import {MapComponent} from './components/map/map.component';
import {GameSettingsComponent} from './components/game-settings/game-settings.component';
import {JsonFilesConfigurationComponent} from '../gamePlugins/components/json-files-configuration/json-files-configuration.component';
import {StepperWizardComponent} from './components/stepper-wizard/stepper-wizard.component';
import {TableWithSelectedPointsComponent} from './components/table-with-selected-points/table-with-selected-points.component';

export const GameRoutes: Routes = [

    { path: 'games',  component: GameComponent, canActivate: [UserGuard]},
    { path: 'map', component: MapComponent, canActivate: [UserGuard]},
    { path: 'settings', component: GameSettingsComponent, canActivate: [UserGuard]},
    { path: 'selected-points', component: TableWithSelectedPointsComponent, canActivate: [UserGuard]},
    { path: 'configurations', component: JsonFilesConfigurationComponent, canActivate: [UserGuard]},
    { path: 'stepper-wizard',   component: StepperWizardComponent, canActivate: [UserGuard]}
];
