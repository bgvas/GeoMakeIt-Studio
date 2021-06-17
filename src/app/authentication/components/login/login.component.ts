import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Observable, observable} from 'rxjs';
import {UserService} from '../../../user-management/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorLogin: boolean;

  constructor(private fb: FormBuilder, private service: AuthService, private router: Router, private user: UserService) { }

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
   this.service.login(this.loginForm.value).subscribe(isAuthenticatedUser => {
     if (isAuthenticatedUser) {
       if (this.user.getRole() === 'super_admin') {
         this.router.navigate(['admin/home'])
       } else  { this.router.navigate(['home'])}
     } else {
       this.errorLogin = true;
     }
   });
  }



}
