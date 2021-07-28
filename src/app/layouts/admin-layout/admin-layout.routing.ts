import { Routes } from '@angular/router';
import { HomeComponent } from '../../shared/components/home-page/home.component';
import { UserProfileComponent } from '../../user-management/components/user-profile/user-profile.component';
import {GameSetupComponent} from '../../games/components/game-setup/game-setup.component';
import {StepperWizardComponent} from '../../games/components/stepper-wizard/stepper-wizard.component';
import {UserGuardService as UserGuard} from '../../authentication/guards/user-guard.service';
import {ActivateAccountComponent} from '../../authentication/components/activate-account/activate-account.component';


export const AdminLayoutRoutes: Routes = [

    { path: 'home',  component: HomeComponent, canActivate: [UserGuard]},
    { path: 'user',   component: UserProfileComponent, canActivate: [UserGuard]},
    { path: 'registration',   redirectTo: '/registration'},
    { path: 'confirm',   redirectTo: '/confirm'},
    { path: 'guide',   redirectTo: '/guide'},
    { path: 'stepper',   component: StepperWizardComponent, canActivate: [UserGuard]},
    { path: 'forgotPassword',   redirectTo: '/forgotPassword'},
    { path: 'games/setup', component: GameSetupComponent, canActivate: [UserGuard]},
    { path: 'login', redirectTo: '/login'},
    { path: 'activate_account', component: ActivateAccountComponent}
];
