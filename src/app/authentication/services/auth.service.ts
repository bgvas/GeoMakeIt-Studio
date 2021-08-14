import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthCredentials} from '../Models/auth-credentials';
import {User} from '../../user-management/models/user';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  _element: any;
  private path = environment.be_Url + 'auth';

  get element() {
    return this._element;
  }

  set element(element: any) {
    this._element = element;
  }

  constructor(private http: HttpClient) {
   /* this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();*/
  }

  registration(request: User): Observable<any> {
    return this.http.post(this.path + '/registration', request);
  }

  confirmEmail(userElements: any): Observable<any> {
    return this.http.post(this.path + '/confirmMail', userElements);
  }
  
  activateAccount(token: any): Observable<any> {
    return this.http.post(this.path + '/activateAccount', token);
  }

   login(credentials: AuthCredentials): Observable<any> {
     return this.http.post(this.path + '/login', credentials);
   }

  logout(): Observable<any> {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    localStorage.removeItem('role');
    // this.currentUserSubject.next(null);
    return this.http.get(this.path + '/logout');
  }
}
