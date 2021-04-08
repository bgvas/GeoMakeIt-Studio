import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {AuthCredentials} from '../Models/auth-credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;  // TODO add User model instead of any //
  private currentUser: Observable<any>; // TODO add User model instead of any //

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any { // TODO add User model instead of any //
    return this.currentUserSubject.value;
  }

 /* login(user: AuthCredentials) {
    const url = '';
    return this.http.post<any>(environment.apiUrl + url, user)
        .pipe(map(checkUser => {
          localStorage.setItem('currentUser', JSON.stringify(checkUser));
          this.currentUserSubject.next(checkUser);
          return checkUser;
        }));
    }*/

    login(user: AuthCredentials) {
      if (user.username === 'user' && user.password === 'test') {
        localStorage.setItem('token', '1|XxqPWqgRFk9yj9B7KKmwRBOFziaeiaKsHYb235HA');
        return true;
      } else { return false }
    }


    logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    }
}
