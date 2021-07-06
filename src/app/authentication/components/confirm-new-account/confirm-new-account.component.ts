import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

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
    this.service.confirmEmail({'email': this.account[0]}).subscribe(data => {
      console.log(data);
      this.sendEmailResult = data[1];
      this.displaySpinner = false;
    },
        (error: Error) => {
          this.displaySpinner = false;
          this.sendEmailResult = 'Error while sending email';
          console.log('Error while sent Confirmation email' + error.message)
        });


  }
}
