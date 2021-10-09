import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Error} from '../../../error-handling/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {UserService} from '../../../user-management/services/user.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  passwordForm: FormGroup;
  emailSend: boolean;
  result: any;
  sendEmailLoadSpinner: boolean;
  private unsubscribe = new Subject<void>();

  constructor(private fb: FormBuilder, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  initializeForm() {
    this.passwordForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email])
    })
  }

  onClick() {
    this.sendEmailLoadSpinner = true;
    this.authService.request_password_reset(this.passwordForm.get('email').value).pipe(takeUntil(this.unsubscribe)).subscribe(emailResult => {
      this.emailSend = true;
      this.result = emailResult?.message;
      this.sendEmailLoadSpinner = false;
    },
        (error: Error) => {
          this.result = error.displayed_message
          console.log('Error in sending email: ' + error.message + error.code);
          this.sendEmailLoadSpinner = false;
        })

  }

}
