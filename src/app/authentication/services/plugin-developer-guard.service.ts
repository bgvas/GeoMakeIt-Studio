import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PluginDeveloperGuardService {

  constructor(private auth: AuthService, private router: Router) { }

  // router plugin developer guard //
  canActivate(): boolean {
    const token = sessionStorage.getItem('v2Token');

    if (token != null &&  localStorage.getItem('role') === 'plugin_developer') {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
