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
  _element: any;

  get element() {
    return this._element;
  }

  set element(element: any) {
    this._element = element;
  }

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  getAllUsersFromDummyJson(): Observable<User> {
    const url = '../assets/dummyJson/users.json';
    return this.http.get<User>(url);
  }

  registration(request: any): Observable<any> {
    return this.http.post(environment.v2Url + 'auth/registration', request);
  }

  confirmEmail(email: any): Observable<any> {
    return this.http.post(environment.v2Url + 'auth/confirmMail', email);
  }
  
  activateAccount(token: any): Observable<any> {
    return this.http.post(environment.v2Url + 'auth/activateAccount', token);
  }

   login(credentials: AuthCredentials): Observable<any> {
     return this.http.post(environment.v2Url + 'auth/login', credentials);
   }

  logout() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    localStorage.removeItem('role');
    this.currentUserSubject.next(null);
  }
}
