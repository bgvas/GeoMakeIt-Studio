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
import {PlugInsComponent} from '../../plugins/plug-ins/plug-ins.component';
import {CreatePluginComponent} from '../../plugins/create-plugin/create-plugin.component';
import {CreateGameComponent} from '../../games/create-game/create-game.component';
import {EditPluginComponent} from '../../plugins/edit-plugin/edit-plugin.component';
import {AvailablePluginsComponent} from '../../plugins/available-plugins/available-plugins.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'studio',  component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'games',   component: GamesComponent },
    { path: 'games/create', component: CreateGameComponent},
    { path: 'plugins', component: PlugInsComponent},
    { path: 'plugins/create', component: CreatePluginComponent},
    { path: 'plugins/edit', component: EditPluginComponent},
    { path: 'plugins/available-plugins', component: AvailablePluginsComponent}
];
