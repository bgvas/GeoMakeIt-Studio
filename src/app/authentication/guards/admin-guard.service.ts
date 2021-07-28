import { Injectable } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {


  constructor(private auth: AuthService, private router: Router) { }

  // router user guard //
  canActivate(): boolean {
    const token = sessionStorage.getItem('token');

    if (token != null && localStorage.getItem('role_id') === '1') {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
