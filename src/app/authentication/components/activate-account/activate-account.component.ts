import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Error} from '../../../error-handling/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {UserService} from '../../../user-management/services/user.service';
import {AuthService} from '../../services/auth.service';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {ActivateAccountRequestModel} from '../../Models/activate-account-request-model';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})


export class ActivateAccountComponent implements OnInit, OnDestroy {


      private unsubscribe = new Subject<void>();

      constructor(private activatedRoute: ActivatedRoute, private service: UserService, private router: Router, private authService: AuthService) { }

      ngOnInit(): void {
        this.activatedRoute.queryParams.pipe(takeUntil(this.unsubscribe)).subscribe(params => {
          const activateAccount = new ActivateAccountRequestModel();
          activateAccount.token = params['token']
          activateAccount.email = params['email']
          this.authService.activateAccount(activateAccount).pipe(takeUntil(this.unsubscribe)).subscribe(userActivated => {
              this.authService.successMessage = userActivated;
              this.router.navigate(['login']);
              },
              (error: ErrorResponseModel) => {
                this.authService.errorMessage = error.message;
                console.log(error.message , error.errors);
               // this.router.navigate(['login']);
              })
        });
      }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

}
