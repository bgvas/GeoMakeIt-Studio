import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../../../user-management/services/user.service';
import {environment} from '../../../../environments/environment.prod';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  errorLogin: boolean;
  isSpinnerActive: boolean;
  messages;
  private unsubscribe = new Subject<void>();

  constructor(private fb: FormBuilder, private service: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.messages = this.service.element;
    this.initializeForm();
  }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
    })
  }

  // get username and password and check user. Then redirect by role //
  onSubmit() {
   this.messages = null;
   this.isSpinnerActive = true;
   this.service.login(this.loginForm.value).pipe(takeUntil(this.unsubscribe)).subscribe(isAuthenticatedUser => {
     if (typeof isAuthenticatedUser !== 'undefined') {
       sessionStorage.setItem('token', isAuthenticatedUser.access_token);
       localStorage.setItem('role_id', isAuthenticatedUser.user.role_id);
       sessionStorage.setItem('user', JSON.stringify(isAuthenticatedUser));
       if (this.userService.getRoleId() === '1') {
         this.router.navigate(['admin/home'])
       } else  { this.router.navigate(['home'])}
       this.isSpinnerActive = false;
     } else {
       this.isSpinnerActive = false;
       this.errorLogin = true;
     }
   },
       (error: Error) => {
       this.router.navigate(['login'])
      this.errorLogin = true;
         this.isSpinnerActive = false;
         console.log('Error in login process ' + error.message)
       });


  }



}
