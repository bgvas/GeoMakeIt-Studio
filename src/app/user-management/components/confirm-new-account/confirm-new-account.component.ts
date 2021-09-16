import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Error} from '../../../error-handling/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-confirm-new-account',
  templateUrl: './confirm-new-account.component.html',
  styleUrls: ['./confirm-new-account.component.css']
})
export class ConfirmNewAccountComponent implements OnInit, OnDestroy {

  account = [];
  sendEmailResult;
  displaySpinner: boolean;
  private unsubscribe = new Subject<void>();

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.account = this.service._element;

    if (this.account?.length === 0) {
      this.router.navigate(['login']);
    }
    this.displaySpinner = true;
    this.service.confirmEmail(this.account).pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.sendEmailResult = data.displayed_message;
      this.displaySpinner = false;
    },
        (error: Error) => {
          this.displaySpinner = false;
          this.sendEmailResult = error.displayed_message;
          console.log('Error while send Confirmation email' + error.message)
        });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
