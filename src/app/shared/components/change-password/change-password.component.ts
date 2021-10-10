import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {passwordMatchValidator} from '../../custom-validators/passwordsMatchValidator';
import {Error} from '../../../error-handling/error/error';
import {User} from '../../../user-management/models/user';
import {AppService} from '../../../app.service';
import {UserService} from '../../../user-management/services/user.service';
import {NotificationsComponent} from '../notifications/notifications.component';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../authentication/services/auth.service';
import {ChangePasswordRequestModel} from '../../models/change-password-request-model';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {

  changePasswordForm: FormGroup;
  user: User;
  private unsubscribe = new Subject<void>();
  errorMessage: string;
  notification = new NotificationsComponent();

  constructor(private fb: FormBuilder, private authService: AuthService, private appService: AppService, private userService: UserService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.user = this.appService.currentUser();
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      const details = new ChangePasswordRequestModel();
      details.password = this.changePasswordForm.get('password').value;
      details.password_confirmation = this.changePasswordForm.get('confirm').value;

      this.authService.changePassword(details).subscribe(changePasswordResult => {
            this.notification.display('Password updated, successfully.', 'success');
          },
          (error: ErrorResponseModel) => {
            this.notification.display('Can\'t change password!', 'danger');
            console.log(error.message);
            console.log(error.errors);
          })
    }
  }

  initializeForm() {
    this.changePasswordForm = this.fb.group({
      password: this.fb.control('', [Validators.required, Validators.pattern(environment.password_pattern)]),
      confirm: this.fb.control('')
    })
    this.changePasswordForm.setValidators(passwordMatchValidator('password', 'confirm'));
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
