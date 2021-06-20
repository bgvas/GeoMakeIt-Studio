import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  aProject: any;
  aPlugin: any;

  constructor(private http: HttpClient) { }

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
}
