import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../../../user-management/services/user.service';
import {environment} from '../../../../environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorLogin: boolean;
  isSpinnerActive: boolean;
  messages;

  constructor(private fb: FormBuilder, private service: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
    })
  }

  // get username and password and check user. Then redirect by role //
  onSubmit() {
   this.isSpinnerActive = true;
   this.service.login(this.loginForm.value).subscribe(isAuthenticatedUser => {
     if (isAuthenticatedUser.user !== null) {
       sessionStorage.setItem('token', environment.token);
       // sessionStorage.setItem('token', isAuthenticatedUser.access_token); TODO -> set active, when we can take token from BE-Builder
       localStorage.setItem('role', isAuthenticatedUser.user.role);
       sessionStorage.setItem('user', JSON.stringify(isAuthenticatedUser));
       if (this.userService.getRole() === 'super_admin') {
         this.router.navigate(['admin/home'])
       } else  { this.router.navigate(['home'])}
       this.isSpinnerActive = false;
     } else {
       this.isSpinnerActive = false;
       this.errorLogin = true;
     }
   },
       (error: Error) => {
      this.errorLogin = true;
         this.isSpinnerActive = false;
         console.log('Error in login process ' + error.message)
       });


  }



}
