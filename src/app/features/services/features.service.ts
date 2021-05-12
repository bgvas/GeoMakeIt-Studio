import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  aProject: any;

  constructor(private http: HttpClient) { }

  set project(proj) {
    this.aProject = proj;
  }

  get project(): any {
    return this.aProject;
  }

  getHelpFile(): Observable<any> {
    return this.http.get('assets/txt-files/how-to.txt', { responseType: 'text' as 'json'});
  }

  getStepByStepImages(): Observable<any> {
    return this.http.get('assets/dummyJson/stepByStep-images.json');
  }
}
