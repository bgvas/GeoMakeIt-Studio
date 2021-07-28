import { Injectable } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PluginDeveloperGuardService {

  constructor(private auth: AuthService, private router: Router) { }

  // router plugin developer guard //
  canActivate(): boolean {
    const token = sessionStorage.getItem('token');

    if (token != null &&  localStorage.getItem('role_id') === '3') {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
