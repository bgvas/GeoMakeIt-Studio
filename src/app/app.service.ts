import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user-management/models/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  currentUser( ): User {
  return JSON.parse(sessionStorage.getItem('user'));
  }
}
