import { Routes } from '@angular/router';
import { HomeComponent } from '../../shared/components/home-page/home.component';
import { UserProfileComponent } from '../../user-management/components/user-profile/user-profile.component';
import {UserGuardService as UserGuard} from '../../authentication/guards/user-guard.service';
import {ActivateAccountComponent} from '../../authentication/components/activate-account/activate-account.component';
import {ChangePasswordComponent} from '../../shared/components/change-password/change-password.component';
import {ChangeForgotPasswordComponent} from '../../authentication/components/change-forgot-password/change-forgot-password.component';




export const AdminLayoutRoutes: Routes = [

    { path: 'home',  component: HomeComponent, canActivate: [UserGuard]},
    { path: 'user',   component: UserProfileComponent, canActivate: [UserGuard]},
    { path: 'registration',   redirectTo: '/registration'},
    { path: 'registration_result',   redirectTo: '/registration_result'},
    { path: 'guide',   redirectTo: '/guide'},
    { path: 'forgot_password',   redirectTo: '/forgot_password'},
    { path: 'login', redirectTo: '/login'},
    { path: 'reset_password', component: ChangeForgotPasswordComponent},
    { path: 'change_forgotten_password', redirectTo: '/change_forgotten_password'},
    //{ path: 'social_login', component: SocialLoginComponent},
    { path: 'change_password',   component: ChangePasswordComponent, canActivate: [UserGuard]},
    { path: 'activate_account', component: ActivateAccountComponent}
];
