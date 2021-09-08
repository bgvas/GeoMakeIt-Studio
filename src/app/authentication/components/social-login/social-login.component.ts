import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../user-management/services/user.service';
import {AuthService} from '../../services/auth.service';
import {SocialUser} from '../../Models/socialUser';
import {Error} from '../../../classes/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit, OnDestroy  {

  isSpinnerActive = false;
  private unsubscribe = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute, private service: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isSpinnerActive = true;
    this.activatedRoute.queryParams.pipe(takeUntil(this.unsubscribe)).subscribe(params => {
      const socialUser = new SocialUser();
      socialUser.email = params['email'];
      socialUser.token = params['token'];
      socialUser.social = params['social'];
      this.authService.socialAuthentication(socialUser).pipe(takeUntil(this.unsubscribe)).subscribe(isAuthenticatedUser => {
        if (typeof isAuthenticatedUser !== 'undefined') {
          sessionStorage.setItem('user', JSON.stringify(isAuthenticatedUser));
          sessionStorage.setItem('token', isAuthenticatedUser.access_token);
          localStorage.setItem('role_id', isAuthenticatedUser.user.role_id);
          if (this.service.getRoleId() === '1') {
            this.router.navigate(['admin/home'])
          } else  {
            window.close();  // close current window //
            window.open('./home');
          }
          this.isSpinnerActive = false;
        }
      },
          (error: Error) => {
            this.isSpinnerActive = false;
            this.router.navigate(['login'])
            console.log('error in social signin: ' + error.message);
          })
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
