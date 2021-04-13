import { Routes } from '@angular/router';

import { DashboardComponent } from '../../features/components/studio/dashboard.component';
import { UserProfileComponent } from '../../user-management/components/user-profile/user-profile.component';
import { TableListComponent } from '../../templateTools/table-list/table-list.component';
import { TypographyComponent } from '../../templateTools/typography/typography.component';
import { IconsComponent } from '../../features/components/icons/icons.component';
import { MapsComponent } from '../../templateTools/maps/maps.component';
import { NotificationsComponent } from '../../features/components/notifications/notifications.component';
import { UpgradeComponent } from '../../templateTools/upgrade/upgrade.component';
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

export const AdminLayoutRoutes: Routes = [

    { path: 'studio',  component: DashboardComponent, canActivate: [CanActivateRouteService]},
    { path: 'user',   component: UserProfileComponent, canActivate: [CanActivateRouteService]},
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
