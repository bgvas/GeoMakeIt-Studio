import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../../../user-management/services/user.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {RoleService} from '../../../user-management/services/role.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  errorLogin: boolean;
  isSpinnerActive: boolean;
  successMessages = '';
  errorMessages = '';
  private unsubscribe = new Subject<void>();


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,
              private userService: UserService, private roleService: RoleService) { }

  ngOnInit(): void {
    this.successMessages = this.authService.successMessage || null;
    console.log(this.successMessages);
    this.errorMessages = this.authService.errorMessage || null;
    console.log(this.errorMessages);
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

  // get credentials from form and check user. Then redirect by role //
  onSubmit() {
   this.isSpinnerActive = true;

   this.authService.login(this.loginForm.value).pipe(takeUntil(this.unsubscribe)).subscribe(isAuthenticatedUser => {
     if (typeof isAuthenticatedUser !== 'undefined') {

       const authUser = isAuthenticatedUser.user;
       sessionStorage.setItem('token', isAuthenticatedUser?.access_token);
       localStorage.setItem('role_id', String(this.roleService?.getMainRole(authUser?.roles)));
       sessionStorage.setItem('user', JSON.stringify(authUser));

       if (this.roleService.getMainRole(authUser?.roles) === 1) {
         this.isSpinnerActive = false;
         this.router.navigate(['admin/home'])
       } else  {
           this.isSpinnerActive = false;
           this.router.navigate(['home'])
       }
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

  // if user choose to authenticated by github //
  onGitHubClick(clicked) {
      if (clicked) {
          window.open(environment.be_Url + 'auth/socialLogin/github');
      }
  }



}
