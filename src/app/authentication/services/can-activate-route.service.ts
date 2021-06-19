import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateRouteService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  // router guard //
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = sessionStorage.getItem('token');

    if (token != null) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
