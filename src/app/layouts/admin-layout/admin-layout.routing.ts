import { Routes } from '@angular/router';
import { HomeComponent } from '../../features/components/home-page/home.component';
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


export const AdminLayoutRoutes: Routes = [

    { path: 'home',  component: HomeComponent, canActivate: [CanActivateRouteService]},
    { path: 'user',   component: UserProfileComponent, canActivate: [CanActivateRouteService]},
    { path: 'registration',   redirectTo: '/registration'},
    { path: 'confirm',   redirectTo: '/confirm'},
    { path: 'forgotPassword',   redirectTo: '/forgotPassword'},
    { path: 'games',   component: GamesComponent, canActivate: [CanActivateRouteService]},
    { path: 'games/setup', component: GameSetupComponent, canActivate: [CanActivateRouteService]},
    { path: 'games/create', component: GameCreateComponent, canActivate: [CanActivateRouteService]},
    { path: 'games/view', component: GameViewComponent, canActivate: [CanActivateRouteService]},
    { path: 'games/build', component: GameBuildComponent, canActivate: [CanActivateRouteService]},
    { path: 'games/plugins', component: PluginsForGamesComponent, canActivate: [CanActivateRouteService]},
    { path: 'games/plugins/config', component: PluginConfigsComponent, canActivate: [CanActivateRouteService]},
    { path: 'plugins', component: PluginsComponent, canActivate: [CanActivateRouteService]},
    { path: 'plugins/create', component: CreatePluginComponent, canActivate: [CanActivateRouteService]},
    { path: 'plugins/edit', component: EditPluginComponent, canActivate: [CanActivateRouteService]},
    { path: 'login', redirectTo: '/login'}
];
