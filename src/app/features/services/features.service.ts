import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  aProject: any;

  constructor() { }

  set project(proj) {
    this.aProject = proj;
  }

  get project(): any {
    return this.aProject;
  }
}
