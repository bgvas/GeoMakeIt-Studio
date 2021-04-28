import {Component, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  open: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onHomeClick() {
    this.router.navigate(['home']);
  }

  onHelpClick() {

  }

  onUserClick() {
    this.router.navigate(['']);
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }




}
