import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {passwordMatchValidator} from '../../../shared/custom-validators/passwordsMatchValidator';
import {NewAccount} from '../../../user-management/models/new-account';
import {Router} from '@angular/router';
import {UserService} from '../../../user-management/services/user.service';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  terms: boolean;


  constructor(private fb: FormBuilder, private router: Router, private service: AuthService) { }

  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm() {
    this.registrationForm = this.fb.group({
      fName: this.fb.control('', Validators.required),
      lName: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.required, Validators.email]),
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
      confirm: this.fb.control('')
    })
     this.registrationForm.setValidators(passwordMatchValidator('password', 'confirm'));
  }

  onSubmit() {
    if ( this.registrationForm.valid) {
      const newAccount = new NewAccount();
      newAccount.fname = this.registrationForm.get('fName').value;
      newAccount.lname = this.registrationForm.get('lName').value;
      newAccount.username = this.registrationForm.get('username').value;
      newAccount.email = this.registrationForm.get('email').value;
      newAccount.password = this.registrationForm.get('password').value;
      this.service.registration(newAccount).subscribe(data => {
        this.service._element = [newAccount.email, data.access_token];
        this.router.navigate(['confirm']);
      },
          (error: Error) => {
              this.router.navigate(['login']);
              console.log('Error registration: ' + error.message);
          })
    }
  }

  onChange(event) {
    this.terms = event.target.checked;
  }


}
