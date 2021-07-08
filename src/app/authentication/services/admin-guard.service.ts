import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {


  constructor(private auth: AuthService, private router: Router) { }

  // router user guard //
  canActivate(): boolean {
    const token = sessionStorage.getItem('v2Token');

    if (token != null && localStorage.getItem('role') === 'super_admin') {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
