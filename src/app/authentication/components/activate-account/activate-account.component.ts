import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Error} from '../../../error-handling/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {UserService} from '../../../user-management/services/user.service';
import {AuthService} from '../../services/auth.service';

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
          this.authService.activateAccount({'token': params['token']}).pipe(takeUntil(this.unsubscribe)).subscribe(userActivated => {
                this.authService.temporary_save = userActivated['displayed_message'];
                this.router.navigate(['login']);
              },
              (error: Error) => {
                this.service.save_temporary = error.displayed_message;
                console.log('Error in user activation: ' + error.message);
                this.router.navigate(['login']);
              })
        });
      }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

}
