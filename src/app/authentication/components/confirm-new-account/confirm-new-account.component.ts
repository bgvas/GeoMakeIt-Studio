import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Error} from '../../../classes/error/error';

@Component({
  selector: 'app-confirm-new-account',
  templateUrl: './confirm-new-account.component.html',
  styleUrls: ['./confirm-new-account.component.css']
})
export class ConfirmNewAccountComponent implements OnInit {

  account = [];
  sendEmailResult;
  displaySpinner: boolean;

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.account = this.service._element;

    if (this.account?.length === 0) {
      this.router.navigate(['login']);
    }
    this.displaySpinner = true;
    this.service.confirmEmail(this.account).subscribe(data => {
      this.sendEmailResult = data.displayed_message;
      this.displaySpinner = false;
    },
        (error: Error) => {
          this.displaySpinner = false;
          this.sendEmailResult = error.displayed_message;
          console.log('Error while sent Confirmation email' + error.message)
        });
  }
}
