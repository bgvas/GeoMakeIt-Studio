import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../../../user/services/user.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {RoleService} from '../../../user/services/role.service';
import {AppService} from '../../../app.service';


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
              private userService: UserService, private roleService: RoleService, private appService: AppService) { }

  ngOnInit(): void {
    this.successMessages = this.authService.successMessage || null;
    this.errorMessages = this.authService.errorMessage || null;
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

   this.authService.login(this.loginForm.value).pipe(takeUntil(this.unsubscribe)).subscribe(authenticated => {
     if (typeof authenticated !== 'undefined') {

        localStorage.setItem('token', authenticated.access_token);
       //this.appService.token = authenticated?.access_token;
       localStorage.setItem('role_id', String(this.roleService?.getMainRole(authenticated?.user?.roles)));
       sessionStorage.setItem('user', JSON.stringify(authenticated?.user));

       if (this.roleService.getMainRole(authenticated?.user?.roles) === 1) {
         this.isSpinnerActive = false;
         this.appService.guard_activator = {'role': 1, 'authenticated': true}
         this.router.navigate(['admin/home'])
       } else  {
           this.isSpinnerActive = false;
           this.appService.guard_activator = {'role': 2, 'authenticated': true}
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
          window.open(environment.be_Url + 'auth/social-login/github');
      }
  }

}
