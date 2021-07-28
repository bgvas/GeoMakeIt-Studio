import {Component, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import * as EventEmitter from 'events';
import {FeaturesService} from '../../services/features.service';
import {json} from 'express';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  open: any;
  authenticated: any;

  constructor(private router: Router, private service: FeaturesService) { }

  ngOnInit(): void {
    this.authenticated = JSON.parse(sessionStorage.getItem('user'));
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
    this.service.logout().subscribe(logoutData => {
    })
    this.router.navigate(['login']);
  }




}
