import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Zones_model} from './plugins/models/designer-models/zones/Zones_model';
import {Game} from './games/models/games/game';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  _arrayOfPoints = new Subject<any>()
  _project = new Subject<any>();
  _temporaryValue?: any;

  constructor() { }

  setProject(project: Game) {
    this._project.next(project);
  }

  getProject() {
    return this._project;
  }

  set arrayOfPoints(array: any) {
    this._arrayOfPoints.next(array);
  }

  get arrayOfPoints() {
    return this._arrayOfPoints;
  }

  set temporaryValue(value) {
    this._temporaryValue = value;
  }

  get temporaryValue() {
    return this._temporaryValue;
  }

}
