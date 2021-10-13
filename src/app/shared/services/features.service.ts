import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../authentication/services/auth.service';
import {environment} from '../../../environments/environment';
import {User} from '../../user-management/models/user';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  aProject: any;
  path = environment.be_Url;

  constructor(private http: HttpClient, private authService: AuthService) { }

  set temporary_save(project) {
    this.aProject = project;
  }

  get temporary_save(): any {
    return this.aProject;
  }

  /*set plugin(plugin) {
    this.aPlugin = plugin;
  }

  get plugin(): any {
    return this.aPlugin;
  }*/

  getHelpFile(): Observable<any> {
    return this.http.get('assets/txt-files/how-to.txt', { responseType: 'text' as 'json'});
  }

  getStepByStepImages(): Observable<any> {
    return this.http.get('assets/dummyJson/stepByStep-images.json');
  }





}
