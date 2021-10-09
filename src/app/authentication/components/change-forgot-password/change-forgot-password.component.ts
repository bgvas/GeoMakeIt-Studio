import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {takeUntil} from 'rxjs/operators';
import {UserService} from '../../../user-management/services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {passwordMatchValidator} from '../../../shared/custom-validators/passwordsMatchValidator';
import {User} from '../../../user-management/models/user';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';

@Component({
  selector: 'app-change-forgot-password',
  templateUrl: './change-forgot-password.component.html',
  styleUrls: ['./change-forgot-password.component.css']
})
export class ChangeForgotPasswordComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject<void>();
  token?: string;
  changePasswordForm: FormGroup;
  user: User;
  errorMessage?: string;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService,
              private userService: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.userService.save_temporary;
    this.initializeForm();
    // take values from url query parameters //
    this.activatedRoute.queryParams.pipe(takeUntil(this.unsubscribe)).subscribe(params => {
      /*this.authService.confirmPasswordReset({'token': params['token']}).pipe(takeUntil(this.unsubscribe)).subscribe(result => {
            this.service.save_temporary = result.user;
            this.router.navigate(['change_forgotten_password']);
          },
          (error: Error) => {
            this.service.save_temporary = error.displayed_message;
            console.log('Error in user activation: ' + error.message);
            this.router.navigate(['login']);
          })*/
    });
  }

  initializeForm () {
    this.changePasswordForm = this.fb.group({
      password: this.fb.control('', [Validators.required, Validators.pattern(environment.password_pattern)]),
      confirm: this.fb.control('', Validators.required)
    })
    this.changePasswordForm.setValidators(passwordMatchValidator('password', 'confirm'));
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      const details = {'user_id': this.user[0].id, 'password': this.changePasswordForm.get('password').value}
      this.authService.changePassword(details).subscribe(changePasswordResult => {
            this.router.navigate(['login']);
          },
          (error: ErrorResponseModel) => {
            this.errorMessage = null;
            console.log(error.message + ' - ' + error.errors);
          })
    }
  }

  onCancel() {
    this.router.navigate(['login']);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
