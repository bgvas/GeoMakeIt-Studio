import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthCredentials} from '../Models/auth-credentials';
import {environment} from '../../../environments/environment';
import {ChangeUsersPassword} from '../../user/models/change-users-password';
import {Response} from '../../shared/models/Response';
import {AuthenticatedUserModel} from '../Models/authenticated-user-model';
import {UserRegistrationModel} from '../Models/user_registration_model';
import {ActivateAccountRequestModel} from '../Models/activate-account-request-model';
import {ChangePasswordRequestModel} from '../../shared/models/change-password-request-model';
import {ChangeForgotPasswordRequestModel} from '../Models/change-forgot-password-request-model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _temporary_save: any;
  _successMessage: any;
  _errorMessage: any;

  private path = environment.be_Url + 'auth';
  constructor(private http: HttpClient) { }




  get temporary_save() {
    return this._temporary_save;
  }

  set temporary_save(element: any) {
    this._temporary_save = element;
  }

  login(credentials: AuthCredentials): Observable<AuthenticatedUserModel> {
    return this.http.post<AuthenticatedUserModel>(this.path + '/login', credentials);
  }

  registration(newUser: UserRegistrationModel): Observable<any> {
      return this.http.post(this.path + '/register', newUser);
  }

  request_password_reset(email: string): Observable<any> {
      return this.http.post(this.path + '/password/reset-request', {'email': email});
  }

  logout(): Observable<any> {
    sessionStorage.clear();
    localStorage.clear();
    return this.http.get(this.path + '/logout');
  }

  activateAccount(activateUser: ActivateAccountRequestModel): Observable<any> {
    return this.http.post(this.path + '/activate-account', activateUser);
  }

  changeForgottenPassword(details: ChangeForgotPasswordRequestModel): Observable<any> {
    return this.http.post<any>(this.path + '/password/reset', details);
  }

  changePassword(details: ChangePasswordRequestModel): Observable<any> {
    return this.http.post<Response>(this.path + '/password/change', details);
  }

  set successMessage(message: any) {
    this._successMessage = message;
  }

  get successMessage(): any {
    return this._successMessage;
  }

  set errorMessage(message: any) {
    this._errorMessage = message;
  }

  get errorMessage(): any {
    return this._errorMessage;
  }

  socialAuthentication(userSocial): Observable<any> {
    return this.http.post(this.path + '/social-login', userSocial);
  }

}
