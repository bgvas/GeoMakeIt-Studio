import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

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

  login(username: string, password: string) {
    const url = '';
    return this.http.post<any>(environment.apiUrl + url, {username, password})
        .pipe(map(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }));

    }

    logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    }
}
