import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Error} from '../../../classes/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})


export class ActivateAccountComponent implements OnInit, OnDestroy {


      private unsubscribe = new Subject<void>();

      constructor(private activatedRoute: ActivatedRoute, private service: UserService, private router: Router) { }

      ngOnInit(): void {
        this.activatedRoute.queryParams.pipe(takeUntil(this.unsubscribe)).subscribe(params => {
          this.service.activateAccount({'token': params['token']}).pipe(takeUntil(this.unsubscribe)).subscribe(userActivated => {
                this.service.element = userActivated['displayed_message'];
                this.router.navigate(['login']);
              },
              (error: Error) => {
                this.service.element = error.displayed_message;
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
