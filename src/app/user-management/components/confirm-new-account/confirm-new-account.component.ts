import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {NewAccount} from '../../models/new-account';

@Component({
  selector: 'app-confirm-new-account',
  templateUrl: './confirm-new-account.component.html',
  styleUrls: ['./confirm-new-account.component.css']
})
export class ConfirmNewAccountComponent implements OnInit {

  account: NewAccount;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (typeof this.userService.element === 'undefined') {
      this.router.navigate(['login']);
    } else {
      this.account = this.userService?.element;
    }
  }

  onClick() {
    this.router.navigate(['login']);
  }

}
