import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthCredentials} from '../Models/auth-credentials';
import {User} from '../../user-management/models/user';
import {CurrentUser} from '../../user-management/models/current-user';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

 /* login(user: AuthCredentials) {
    const url = '';
    return this.http.post<User>(//environment.apiUrl + url, user)
        .pipe(map(checkUser => {
          localStorage.setItem('currentUser', JSON.stringify(checkUser));
          this.currentUserSubject.next(checkUser);
          return checkUser;
        }));
    }*/

    getAllUsersFromDummyJson(): Observable<User> {
      const url = '../assets/dummyJson/users.json';
      return this.http.get<User>(url);
    }


    login(user: AuthCredentials): Observable<boolean> {
      return this.getAllUsersFromDummyJson().pipe(map(e => {
        const authUser = e['data'].filter(k => k.username === user.username && k.password === user.password).pop();
        if (typeof authUser === 'undefined') {
          return false;
        } else {
          const nowUser = new CurrentUser();
          nowUser.id = authUser.id;
          nowUser.email = authUser.email;
          nowUser.name = authUser.name;
          nowUser.username = authUser.username;
          nowUser.role = authUser.role;

          sessionStorage.setItem('user', JSON.stringify(nowUser));
          localStorage.setItem('role', authUser.role);
          sessionStorage.setItem('token', environment.token); // TODO Change this when begin getting tokens from login //
          return true;
        }
      }));
    }

    logout() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    localStorage.removeItem('role');
    this.currentUserSubject.next(null);
    }
}
