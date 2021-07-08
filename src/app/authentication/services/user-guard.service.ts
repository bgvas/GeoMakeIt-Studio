import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserGuardService {

  constructor(private auth: AuthService, private router: Router) { }

  // router user guard //
  canActivate(): boolean {
    const token = sessionStorage.getItem('v2Token');

    if (token != null && localStorage.getItem('role') === 'game_author' || localStorage.getItem('role') === 'plugin_developer') {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}


