import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {designerModel} from '../models/designer-model';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {isArray} from 'rxjs/internal-compatibility';
import {ValidationsService} from '../../shared/services/validations/validations.service';

@Injectable({
  providedIn: 'root'
})
export class GamePluginsService {

  private url = 'assets/dummyJson/'

  constructor(private http: HttpClient, private fb: FormBuilder, private validationService: ValidationsService) { }


  getAllJsonContentByGameId(gameId: number): Observable<any> {
    return this.http.get(this.url + 'pluginsByGameId.json')
  }

  getDesignerFile(name: string, designer_type: string): Observable<designerModel> {
    if (typeof name !== 'undefined') {
      const fileName = name + '_' + designer_type + '_designer.json';
      return this.http.get<designerModel>(this.url + fileName);
    } else {
      return new Observable<designerModel>();
    }
  }


  addControlsToConfigTypeForm(form: FormGroup, dataFile: any): FormGroup {
    for (const field in dataFile ) {
      form.addControl(field , this.fb.group({}));
      for (const fieldItem in dataFile[field]) {
        if (typeof dataFile[field][fieldItem] !== 'object') {
          (form.get(field) as FormGroup)
              .addControl(fieldItem, this.fb.control(dataFile[field][fieldItem], this.validationService.set(['Required'])))
        }
        if (typeof dataFile[field][fieldItem] === 'object' && isArray(dataFile[field][fieldItem])) {
          (form.get(field) as FormGroup)
              .addControl(fieldItem, this.fb.array([this.fb.control(dataFile[field][fieldItem])]))
        }
      }
    }
    return form;
  }


  addControlsToDataTypeForm(form: FormGroup, dataFile: any): FormGroup {
    for (const title in dataFile) {
      form.addControl(title, this.fb.array([]))
      for (const item in dataFile[title]) {
        const newGroup = new FormGroup({});
        for(const value in dataFile[title][item]) {
          if (isArray(dataFile[title][item][value])) {
            newGroup.addControl(value, this.fb.array([this.fb.control(dataFile[title][item][value])]))
          } else {
            newGroup.addControl(value, this.fb.control(dataFile[title][item][value], this.validationService.set(['Required'])))
          }
        }
        (form.get(title) as FormArray).push(newGroup)
      }
    }
    return form;
  }
}
