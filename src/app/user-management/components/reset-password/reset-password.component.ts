import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../authentication/services/auth.service';
import {takeUntil} from 'rxjs/operators';
import {Error} from '../../../classes/error/error';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject<void>();
  token: string;

  constructor(private activatedRoute: ActivatedRoute, private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(takeUntil(this.unsubscribe)).subscribe(params => {
      this.service.confirmPasswordReset({'token': params['token']}).pipe(takeUntil(this.unsubscribe)).subscribe(result => {
            this.service.element = result.user;
            this.router.navigate(['changeForgotPassword']);
          },
          (error: Error) => {
            this.service.element = error.displayed_message;
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
