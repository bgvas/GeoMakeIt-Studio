import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {passwordMatchValidator} from '../../../shared/custom-validators/passwordsMatchValidator';
import {Error} from '../../../error-handling/error/error';
import {User} from '../../../user-management/models/user';
import {AppService} from '../../../app.service';
import {UserService} from '../../../user-management/services/user.service';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../services/auth.service';

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
      const details = {'user_id': this.user?.id, 'password': this.changePasswordForm.get('password').value}
      this.authService.changePassword(details).subscribe(changePasswordResult => {
            this.notification.display('Password updated, successfully', 'success');
          },
          (error: Error) => {
            this.errorMessage = error.displayed_message;
            this.notification.display('Error changing password!', 'danger');
            console.log('Error while changing password: ' + error.message + ' - ' + error.code);
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
