import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {passwordMatchValidator} from '../../../shared/custom-validators/passwordsMatchValidator';
import {NewAccount} from '../../models/new-account';
import {Router} from '@angular/router';
import {AuthService} from '../../../authentication/services/auth.service';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  terms: boolean;


  constructor(private fb: FormBuilder, private router: Router, private service: UserService) { }

  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm() {
    this.registrationForm = this.fb.group({
      fName: this.fb.control('', Validators.required),
      lName: this.fb.control(''),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
      confirm: this.fb.control('')
    })
     this.registrationForm.setValidators(passwordMatchValidator('password', 'confirm'));
  }

  onSubmit() {
    if ( this.registrationForm.valid) {
      const newAccount = new User();
      newAccount.name = this.registrationForm.get('fName').value + ' ' + this.registrationForm.get('lName').value;
      newAccount.email = this.registrationForm.get('email').value;
      newAccount.password = this.registrationForm.get('password').value;
      this.service.registration(newAccount).subscribe(data => {
        this.service._element = {'email': newAccount.email, 'confirm_token': data.confirm_token}; // pass email and token, thru AuthService, to ConfirmController
        this.router.navigate(['confirm']);
      },
          (error) => {
              this.router.navigate(['login']);
              console.log('Error registration: ' + error.message);
          })
    }
  }

  onChange(event) {
    this.terms = event.target.checked;
  }


}
