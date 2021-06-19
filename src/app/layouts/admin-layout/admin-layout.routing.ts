import { Routes } from '@angular/router';
import { HomeComponent } from '../../shared/components/home-page/home.component';
import { UserProfileComponent } from '../../user-management/components/user-profile/user-profile.component';
import {GamesComponent} from '../../games/components/my-games/games.component';
import {PluginsComponent} from '../../plugins/components/my-plugins/plugins.component';
import {CreatePluginComponent} from '../../plugins/components/create-plugin/create-plugin.component';
import {GameCreateComponent} from '../../games/components/game-create/game-create.component';
import {EditPluginComponent} from '../../plugins/components/edit-plugin/edit-plugin.component';
import {PluginsForGamesComponent} from '../../games/components/plugins-for-games/plugins-for-games.component'
import {PluginConfigsComponent} from '../../games/components/plugins-for-games/plugin-configs/plugin-configs.component';
import {CanActivateRouteService} from '../../authentication/services/can-activate-route.service';
import {GameViewComponent} from '../../games/components/game-view/game-view.component';
import {GameBuildComponent} from '../../games/components/game-build/game-build.component';
import {GameSetupComponent} from '../../games/components/game-setup/game-setup.component';
import {StepperWizardComponent} from '../../games/components/stepper-wizard/stepper-wizard.component';
import {UserGuardService as UserGuard} from '../../authentication/services/user-guard.service';


export const AdminLayoutRoutes: Routes = [

    { path: 'home',  component: HomeComponent, canActivate: [UserGuard]},
    { path: 'user',   component: UserProfileComponent, canActivate: [UserGuard]},
    { path: 'registration',   redirectTo: '/registration'},
    { path: 'confirm',   redirectTo: '/confirm'},
    { path: 'guide',   redirectTo: '/guide'},
    { path: 'stepper',   component: StepperWizardComponent, canActivate: [UserGuard]},
    { path: 'forgotPassword',   redirectTo: '/forgotPassword'},
    { path: 'games',   component: GamesComponent, canActivate: [UserGuard]},
    { path: 'games/setup', component: GameSetupComponent, canActivate: [UserGuard]},
    { path: 'games/create', component: GameCreateComponent, canActivate: [UserGuard]},
    { path: 'games/view', component: GameViewComponent, canActivate: [UserGuard]},
    { path: 'games/build', component: GameBuildComponent, canActivate: [UserGuard]},
    { path: 'games/plugins', component: PluginsForGamesComponent, canActivate: [UserGuard]},
    { path: 'games/plugins/config', component: PluginConfigsComponent, canActivate: [UserGuard]},
    { path: 'plugins', component: PluginsComponent, canActivate: [UserGuard]},
    { path: 'plugins/create', component: CreatePluginComponent, canActivate: [UserGuard]},
    { path: 'plugins/edit', component: EditPluginComponent, canActivate: [UserGuard]},
    { path: 'login', redirectTo: '/login'}
];
