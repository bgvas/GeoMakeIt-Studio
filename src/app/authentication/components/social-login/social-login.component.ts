import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {UserService} from '../../../user-management/services/user.service';
import {AuthService} from '../../services/auth.service';
import {SocialUser} from '../../Models/socialUser';
import {Error} from '../../../classes/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {HeaderBarComponent} from '../../../shared/components/header-bar/header-bar.component';


@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit, OnDestroy  {

  isSpinnerActive = false;
  private unsubscribe = new Subject<void>();
  @ViewChild('HeaderBarComponent') headerBar: HeaderBarComponent;


  constructor(private url: ActivatedRoute, private service: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isSpinnerActive = true;

    // get values from url parameters //
    this.url.queryParams.pipe(takeUntil(this.unsubscribe)).subscribe(params => {

      // create a user with elements from social-media authentication //
      const socialUser = new SocialUser();
      socialUser.email = params['email'];
      socialUser.token = params['token'];
      socialUser.social = params['social'];

      // authenticate, if user from social-media exists, or redirect to registration //
      this.authService.socialAuthentication(socialUser).pipe(takeUntil(this.unsubscribe)).subscribe(isAuthenticatedUser => {
        if (typeof isAuthenticatedUser !== 'undefined') {
          sessionStorage.setItem('user', JSON.stringify(isAuthenticatedUser));
          sessionStorage.setItem('token', isAuthenticatedUser?.access_token);
          localStorage.setItem('role_id', isAuthenticatedUser?.user.role_id);

          if (isAuthenticatedUser?.user.role_id === '1') {  // if user is administrator, redirect to admin panel //
            this.isSpinnerActive = false;
            this.router.navigate(['admin/home'])
          }
            //this.headerBar.ngOnChanges(isAuthenticatedUser);
            this.router.navigate(['home'])  // else redirect to user panel //
            this.isSpinnerActive = false;
        } else {
          this.isSpinnerActive = false;
          this.router.navigate(['login'])
        }
      },
          (error: Error) => {
            this.isSpinnerActive = false;
            this.router.navigate(['login'])
            console.log('error in social signin: ' + error.message);
          })
    });
  }

  reloadHeadBar() {

  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
