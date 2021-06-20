import { Routes } from '@angular/router';
import { HomeComponent } from '../../shared/components/home-page/home.component';
import { UserProfileComponent } from '../../user-management/components/user-profile/user-profile.component';
import {EditPluginComponent} from '../../plugins/components/edit-plugin/edit-plugin.component';
import {GameSetupComponent} from '../../games/components/game-setup/game-setup.component';
import {StepperWizardComponent} from '../../games/components/stepper-wizard/stepper-wizard.component';
import {UserGuardService as UserGuard} from '../../authentication/services/user-guard.service';
import {PluginDeveloperGuardService as DeveloperGuard} from '../../authentication/services/plugin-developer-guard.service';


export const AdminLayoutRoutes: Routes = [

    { path: 'home',  component: HomeComponent, canActivate: [UserGuard]},
    { path: 'user',   component: UserProfileComponent, canActivate: [UserGuard]},
    { path: 'registration',   redirectTo: '/registration'},
    { path: 'confirm',   redirectTo: '/confirm'},
    { path: 'guide',   redirectTo: '/guide'},
    { path: 'stepper',   component: StepperWizardComponent, canActivate: [UserGuard]},
    { path: 'forgotPassword',   redirectTo: '/forgotPassword'},
    { path: 'games/setup', component: GameSetupComponent, canActivate: [UserGuard]},
    { path: 'plugins/edit', component: EditPluginComponent, canActivate: [DeveloperGuard]},
    { path: 'login', redirectTo: '/login'}
];
