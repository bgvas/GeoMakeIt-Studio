import { Routes } from '@angular/router';

import { DashboardComponent } from '../../studio/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {GamesComponent} from '../../games/games/games.component';
import {PluginsComponent} from '../../plugins/my-plugins/plugins.component';
import {CreatePluginComponent} from '../../plugins/create/create-plugin.component';
import {CreateGameComponent} from '../../games/create/create-game.component';
import {EditPluginComponent} from '../../plugins/edit-plugin/edit-plugin.component';
import {PluginsForGamesComponent} from '../../games/plugins-for-games/plugins-for-games.component'
import {PluginConfigsComponent} from '../../games/plugins-for-games/plugin-configs/plugin-configs.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'studio',  component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'games',   component: GamesComponent },
    { path: 'games/create', component: CreateGameComponent},
    { path: 'games/plugins', component: PluginsForGamesComponent},
    { path: 'games/plugins/config', component: PluginConfigsComponent},
    { path: 'plugins', component: PluginsComponent},
    { path: 'plugins/create', component: CreatePluginComponent},
    { path: 'plugins/edit', component: EditPluginComponent},
    { path: 'login', redirectTo: '/login'}
];
