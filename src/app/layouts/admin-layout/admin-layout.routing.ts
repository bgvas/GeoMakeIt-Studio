import { Routes } from '@angular/router';

import { DashboardComponent } from '../../studio/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {GamesComponent} from '../../games/my-games/games.component';
import {PluginsComponent} from '../../plugins/my-plugins/plugins.component';
import {CreatePluginComponent} from '../../plugins/create-plugin/create-plugin.component';
import {GameCreateComponent} from '../../games/game-create/game-create.component';
import {EditPluginComponent} from '../../plugins/edit-plugin/edit-plugin.component';
import {PluginsForGamesComponent} from '../../games/plugins-for-games/plugins-for-games.component'
import {PluginConfigsComponent} from '../../games/plugins-for-games/plugin-configs/plugin-configs.component';
import {CanActivateRouteService} from '../../auth/can-activate-route.service';
import {GameViewComponent} from '../../games/game-view/game-view.component';
import {GameBuildComponent} from '../../games/game-build/game-build.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'studio',  component: DashboardComponent, canActivate: [CanActivateRouteService]},
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [CanActivateRouteService]},
    { path: 'games',   component: GamesComponent, canActivate: [CanActivateRouteService]},
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
