import { Injectable } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';


@Injectable({
  providedIn: 'root'
})
export class UserGuardService {

  constructor(private auth: AuthService, private router: Router, private appService: AppService) { }

  // router user guard //
  canActivate(): boolean {

    return true;
    //const token = sessionStorage.getItem('token');
   /* if (typeof this.appService.guard_activator !== 'undefined') {
      if (this.appService.guard_activator['role'] !== 1 && this.appService.guard_activator['authenticated'] === true) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    } else {
      this.router.navigate(['login']);
      return false;
    }*/
  }
}


