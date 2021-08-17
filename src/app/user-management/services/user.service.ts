import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ChangeUsersPassword} from '../models/change-users-password';
import {Response} from '../../shared/models/Response';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  _element: any;
  path = environment.be_Url + 'users';
  authPath = environment.be_Url + 'auth';

  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<User> {
    const path = 'assets/dummyJson/userProfile.json';
    return this.http.get<User>(path);
  }

  /*putUserProfile(userId, userProfileToUpdate: User): Observable<any> {
    const path = 'assets/dummyJson/userProfile.json';
    return this.http.put(path, userProfileToUpdate);
  }*/

  set element(element: any) {
    this._element = element;
  }

  get element() {
    return this._element;
  }
  
  getRoleId(): any {
    return localStorage.getItem('role_id');
  }

  getAllUsers(): Observable<User> {
    return this.http.get<User>(this.path + '/all');
  }

  deleteUser(userId): Observable<any> {
    return this.http.delete(this.path + '/delete/' + userId);
  }

  updateUser(user, id): Observable<any> {
    return this.http.put(this.path + '/update/' + id, [user]);
  }

  newUser(user: User): Observable<any> {
    return this.http.post(this.path + '/new', [user]);
  }

  checkIfEmailExists(email): Observable<any> {
    return this.http.post(this.path + '/check/email', {'email': email});
  }

  registration(request: User): Observable<any> {
    return this.http.post(this.authPath + '/registration', request);
  }

  confirmEmail(userElements: any): Observable<any> {
    return this.http.post(this.authPath + '/confirmMail', userElements);
  }

  activateAccount(token: any): Observable<any> {
    return this.http.post(this.authPath + '/activateAccount', token);
  }

  resetPasswordEmail(email: string): Observable<any> {
    return this.http.post(this.authPath + '/resetPassword', {'email': email});
  }

  confirmPasswordReset(token: any): Observable<any> {
    return this.http.post(this.authPath + '/confirmPasswordReset', token);
  }

  changePassword(details: ChangeUsersPassword): Observable<Response> {
    return this.http.post<Response>(this.authPath + '/changePassword', details);
  }

 }



