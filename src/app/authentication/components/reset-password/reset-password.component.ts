import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {takeUntil} from 'rxjs/operators';
import {Error} from '../../../error-handling/error/error';
import {UserService} from '../../../user-management/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject<void>();
  token: string;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(takeUntil(this.unsubscribe)).subscribe(params => {
      this.authService.confirmPasswordReset({'token': params['token']}).pipe(takeUntil(this.unsubscribe)).subscribe(result => {
            this.service.save_temporary = result.user;
            this.router.navigate(['change_forgotten_password']);
          },
          (error: Error) => {
            this.service.save_temporary = error.displayed_message;
            console.log('Error in user activation: ' + error.message);
            this.router.navigate(['login']);
          })
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
