import {Routes} from '@angular/router';
import {AuthenticationComponent} from './authentication.component';
import {SocialLoginComponent} from './components/social-login/social-login.component';


export const AuthenticationRoutes: Routes = [

    { path: 'auth',  component: AuthenticationComponent},
    { path: 'social-login', component: SocialLoginComponent}
];
