import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../authentication/services/auth.service';
import {environment} from '../../../environments/environment';
import {User} from '../../user-management/models/user';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  aProject: any;
  aPlugin: any;
  path = environment.be_Url;

  constructor(private http: HttpClient, private authService: AuthService) { }

  set project(project) {
    this.aProject = project;
  }

  get project(): any {
    return this.aProject;
  }

  set plugin(plugin) {
    this.aPlugin = plugin;
  }

  get plugin(): any {
    return this.aPlugin;
  }

  getHelpFile(): Observable<any> {
    return this.http.get('assets/txt-files/how-to.txt', { responseType: 'text' as 'json'});
  }

  getStepByStepImages(): Observable<any> {
    return this.http.get('assets/dummyJson/stepByStep-images.json');
  }

  logout(): Observable<any> {
    return this.authService.logout();
  }

  currentUser(): Observable<User> {
    return new Observable((currentUser) => currentUser.next(JSON.parse(sessionStorage.getItem('user'))));
  }


}
