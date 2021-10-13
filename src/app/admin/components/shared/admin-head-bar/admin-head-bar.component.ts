import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../authentication/services/auth.service';
import {Router} from '@angular/router';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-admin-head-bar',
  templateUrl: './admin-head-bar.component.html',
  styleUrls: ['./admin-head-bar.component.css']
})
export class AdminHeadBarComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout().pipe(take(1)).subscribe();
    this.router.navigate(['login']);
  }
}
