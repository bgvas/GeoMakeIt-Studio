import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user-management/models/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  GetCurrentUser( ) {
  return <User>JSON.parse(sessionStorage.getItem('user'))['user'];
  }
}
