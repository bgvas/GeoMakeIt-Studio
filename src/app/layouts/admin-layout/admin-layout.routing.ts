import { Routes } from '@angular/router';
import { HomeComponent } from '../../shared/components/home-page/home.component';
import { UserProfileComponent } from '../../user-management/components/user-profile/user-profile.component';
import {StepperWizardComponent} from '../../games/components/stepper-wizard/stepper-wizard.component';
import {UserGuardService as UserGuard} from '../../authentication/guards/user-guard.service';
import {ActivateAccountComponent} from '../../user-management/components/activate-account/activate-account.component';
import {ChangePasswordComponent} from '../../user-management/components/change-password/change-password.component';
import {ResetPasswordComponent} from '../../user-management/components/reset-password/reset-password.component';
import {GameSetupMainPageComponent} from '../../games/components/game-setup-main-page/game-setup-main-page.component';


export const AdminLayoutRoutes: Routes = [

    { path: 'home',  component: HomeComponent, canActivate: [UserGuard]},
    { path: 'user',   component: UserProfileComponent, canActivate: [UserGuard]},
    { path: 'registration',   redirectTo: '/registration'},
    { path: 'confirm',   redirectTo: '/confirm'},
    { path: 'guide',   redirectTo: '/guide'},
    { path: 'stepper',   component: StepperWizardComponent, canActivate: [UserGuard]},
    { path: 'forgotPassword',   redirectTo: '/forgotPassword'},
    { path: 'games/setup', component: GameSetupMainPageComponent, canActivate: [UserGuard]},
    { path: 'login', redirectTo: '/login'},
    { path: 'resetPassword', component: ResetPasswordComponent},
    { path: 'changeForgotPassword', redirectTo: '/changeForgotPassword'},
    { path: 'changePassword',   component: ChangePasswordComponent, canActivate: [UserGuard]},
    { path: 'activate_account', component: ActivateAccountComponent}
];
