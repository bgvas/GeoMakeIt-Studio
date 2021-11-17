import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {take, takeUntil} from 'rxjs/operators';
import {UserService} from '../../../user/services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {passwordMatchValidator} from '../../../shared/custom-validators/passwordsMatchValidator';
import {User} from '../../../user/models/user';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {ChangePasswordRequestModel} from '../../../shared/models/change-password-request-model';
import {ChangeForgotPasswordRequestModel} from '../../Models/change-forgot-password-request-model';

@Component({
  selector: 'app-change-forgot-password',
  templateUrl: './change-forgot-password.component.html',
  styleUrls: ['./change-forgot-password.component.css']
})
export class ChangeForgotPasswordComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject<void>();
  tokenFromUrl?: string;
  emailFromUrl?: string;
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
      this.tokenFromUrl = params['token'];
      this.emailFromUrl = params['email'];
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
      const details = new ChangeForgotPasswordRequestModel();
      details.password = this.changePasswordForm.get('password').value;
      details.email = this.emailFromUrl;
      details.token = this.tokenFromUrl;

      this.authService.changeForgottenPassword(details).pipe(take(1)).pipe(takeUntil(this.unsubscribe)).subscribe(changePasswordResult => {
            this.authService.errorMessage = null;
            this.authService.successMessage = 'Password changed successfully.'
            this.router.navigate(['login']);
          },
          (error: ErrorResponseModel) => {
            this.authService.successMessage = null;
            this.authService.errorMessage = 'Can\'t change password.'
            this.router.navigate(['login']);
            this.errorMessage = null;
            console.log(error.message, error.errors);
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
