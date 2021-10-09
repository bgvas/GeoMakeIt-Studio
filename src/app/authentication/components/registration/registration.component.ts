import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {passwordMatchValidator} from '../../../shared/custom-validators/passwordsMatchValidator';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../../user-management/services/user.service';
import {UserRegistrationModel} from '../../Models/user_registration_model';
import {environment} from '../../../../environments/environment';
import {RegistrationResponseModel} from '../../Models/registration_response_model';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  registrationForm: FormGroup;
  terms: boolean;
  isLoading: boolean;
  private unsubscribe = new Subject<void>();


  constructor(private fb: FormBuilder, private router: Router, private service: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  initializeForm() {
    this.registrationForm = this.fb.group({
      fName: this.fb.control('', Validators.required),
      lName: this.fb.control(''),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.pattern(environment.password_pattern)]),
      confirm: this.fb.control('')
    })
     this.registrationForm.setValidators(passwordMatchValidator('password', 'confirm'));
  }

  onSubmit() {
    if ( this.registrationForm.valid) {
      this.isLoading = true;

      const newAccount = new UserRegistrationModel();
      newAccount.name = this.registrationForm.get('fName').value + ' ' + this.registrationForm.get('lName').value;
      newAccount.email = this.registrationForm.get('email').value;
      newAccount.password = this.registrationForm.get('password').value;
      newAccount.password_confirmation = this.registrationForm.get('confirm').value;

      this.authService.registration(newAccount).pipe(takeUntil(this.unsubscribe)).subscribe((data: RegistrationResponseModel) => {
        this.authService.successMessage = data.message;
        this.isLoading = false;
        this.router.navigate(['registration_result']);
      },
          (error: ErrorResponseModel) => {
              this.isLoading = false;
              this.router.navigate(['registration_result']);
              this.authService.errorMessage = error.message;
              console.log(error.message + ' - ' + error.errors);
          })
    }
  }

  onChange(event) {
    this.terms = event?.target?.checked;
  }


}
