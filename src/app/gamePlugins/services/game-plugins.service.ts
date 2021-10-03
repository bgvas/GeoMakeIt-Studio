import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DesignerModel} from '../models/designer-model';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {isArray} from 'rxjs/internal-compatibility';
import {ValidationsService} from '../../shared/services/validations/validations.service';
import {Designer} from '../../games/models/designers/designer/designer';

@Injectable({
  providedIn: 'root'
})
export class GamePluginsService {

  private url = 'assets/dummyJson/'
  private signalForUpdate = new Subject<any>(); // need to create a subject

  constructor(private http: HttpClient, private fb: FormBuilder, private validationService: ValidationsService) { }


  getAllJsonContentByGameId(gameId: number): Observable<any> {
    return this.http.get(this.url + 'pluginsByGameId.json')
  }

  getDesignerFile(name: string, designer_type: string): Observable<DesignerModel> {
    if (typeof name !== 'undefined') {
      const fileName = name + '_' + designer_type + '_designer.json';
      return this.http.get<DesignerModel>(this.url + fileName);
    } else {
      return new Observable<DesignerModel>();
    }
  }

  stringAfterDot(str): string {
    if (str === '') {
      return str;
    } else {
      const index = str.indexOf('.') + 1;
      return str.substring(index, (str.length));
    }
  }

  stringBeforeDot(str): string {
    if (str === '') {
      return str;
    } else {
      const index = str.indexOf('.');
      return str.substring(0, index);
    }
  }

  /**
   * In this function we will declare form controls and we will add to form values from data file
   * this is only for JSON files with config-type design
   *
   * @param form
   * @param dataFile
   * @param designerFile
   */
  addControlsToConfigTypeForm(form: FormGroup, dataFile: any,  designerFile: DesignerModel): FormGroup {
    const designer = designerFile?.designer;
    for(const items in designer) {
       for(const componentItem in designer[items]?.components) {
           const componentItemTitle = this.stringBeforeDot(componentItem);        // this will be the name of group //
           const controlTitle = this.stringAfterDot(componentItem);               // this will be the name of control //
           form.addControl(componentItemTitle, this.fb.group({}));
           const controlType = designer[items]?.components[componentItem]?.type;      // this will be the type of control //
           if(controlType.includes('array')) {
             (form.get(componentItemTitle) as FormGroup).addControl(controlTitle, this.fb.array([]));
             if(Object.keys(dataFile)?.length > 0) {              // check if dataFile has values to add to form //
               const data = (dataFile[componentItemTitle][controlTitle]);
               for(const value of data) {             // iterate and add values to formArray //
                 ((form.get(componentItemTitle) as FormGroup).get(controlTitle) as FormArray).push(this.fb.control(value));
               }
             }
           } else {
             if(Object.keys(dataFile)?.length > 0) {
               const data = (dataFile[componentItemTitle][controlTitle]);
               (form.get(componentItemTitle) as FormGroup).addControl(controlTitle, this.fb.control(data));
             } else {     // if there is no data values, just add the control //
               (form.get(componentItemTitle) as FormGroup).addControl(controlTitle, this.fb.control(''));
             }
           }
       }
     }
    return form;
  }


  /**
   * In this function we will declare form controls and we will add to form values from data-file
   * this is only for JSON files with data-type design
   *
   * @param form
   * @param dataFile
   * @param designer
   */
  addControlsToDataTypeForm(form: FormGroup, dataFile: any, designer: DesignerModel): FormGroup {
    //console.log(designerFile.file);
  /*  form.addControl(designer?.file, this.fb.array([]));
    const designerItems = designer?.designer;
    const dataContents = dataFile[designer?.file];
    for(const index in designerItems) {
     const newGroup = this.fb.group({});
     for(const componentItemTitle in  designerItems[index].components) {
      for(const item in dataContents) {

         const value = dataContents[item][componentItemTitle];
         const typeOfControl = designerItems[index].components[componentItemTitle].type;
         if(typeOfControl.includes('array')) {
           newGroup.addControl(componentItemTitle, this.fb.array(value));
         } else {
           newGroup.addControl(componentItemTitle, this.fb.control(value));
         }
         console.log(dataFile['questions'][componentItemTitle])
      }
     }
      (form.get(designer?.file) as FormArray).push(newGroup);
    }*/
    /*for (const title in dataFile) {
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
    }*/
    return form;
  }

  sendUpdate(message: boolean) { // the component that wants to update something, calls this fn
    this.signalForUpdate.next({ signal: message }); // next() will feed the value in Subject
  }

  getUpdate(): Observable<any> { // the receiver component calls this function
    return this.signalForUpdate.asObservable(); // it returns as an observable to which the receiver funtion will subscribe
  }

}
