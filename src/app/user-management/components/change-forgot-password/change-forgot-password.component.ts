import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';
import {AuthService} from '../../../authentication/services/auth.service';
import {Router} from '@angular/router';
import {passwordMatchValidator} from '../../../shared/custom-validators/passwordsMatchValidator';
import {Subject} from 'rxjs';
import {Error} from '../../../classes/error/error';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-change-forgot-password',
  templateUrl: './change-forgot-password.component.html',
  styleUrls: ['./change-forgot-password.component.css']
})
export class ChangeForgotPasswordComponent implements OnInit, OnDestroy {

  changePasswordForm: FormGroup;
  user: User;
  errorMessage: string;
  private unsubscribe = new Subject<void>();

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.userService.element;
    console.log(this.user);
    this.initializeForm();
  }

  onCancel() {
    this.router.navigate(['login']);
  }

  onSubmit() {
      if (this.changePasswordForm.valid) {
        const details = {'user_id': this.user[0].id, 'password': this.changePasswordForm.get('password').value}
        this.userService.changePassword(details).subscribe(changePasswordResult => {
          this.router.navigate(['login']);
        },
            (error: Error) => {
              this.errorMessage = error.displayed_message;
              console.log('Error while changing password: ' + error.message + ' - ' + error.code);
            })
      }
  }

  initializeForm () {
    this.changePasswordForm = this.fb.group({
      password: this.fb.control('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
      confirm: this.fb.control('', Validators.required)
    })
    this.changePasswordForm.setValidators(passwordMatchValidator('password', 'confirm'));
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


}
