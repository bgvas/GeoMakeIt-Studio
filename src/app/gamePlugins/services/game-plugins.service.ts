import { Injectable, EventEmitter } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DesignerModel} from '../models/designer-model';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ValidationsService} from '../../shared/services/validations/validations.service';
import {environment} from '../../../environments/environment';
import {User} from '../../user-management/models/user';
import {pluginReleasePostRequestModel} from '../../plugins/models/plugin-release-post-request-model';
import {GamePlugin} from '../models/game-plugin';
import {Zones_model} from '../../plugins/models/designer-models/zones/Zones_model';

@Injectable({
  providedIn: 'root'
})
export class GamePluginsService {

  private url1 = 'assets/dummyJson/';
  private rootPath = environment.be_Url;
  private url = environment.be_Url + 'gamePlugins/';
  private _temporary_object?: any;
  private signalForUpdate = new Subject<any>(); // need to create a subject
  private _arrayOfPoints = Array<Zones_model>() // need to create a subject
  private game_id = (<User>JSON.parse(sessionStorage.getItem('project'))).id;

  constructor(private http: HttpClient, private fb: FormBuilder, private validationService: ValidationsService) { }


  set arrayOfPoints(array: any) {
    this._arrayOfPoints = array;
  }

  get arrayOfPoints() {
    return this._arrayOfPoints;
  }

  saveGamePluginDataContent(release_id: number, name: string, gamePluginDataContent: any) {
    console.log('Saved gamePluginContent');
  }

  set temporary_save(object) {
    this._temporary_object = object;
  }

  get temporary_save() {
    return this._temporary_object;
  }

  addPluginToGame(release: pluginReleasePostRequestModel): Observable<GamePlugin> {
    return this.http.post<GamePlugin>(this.rootPath + 'games/' + this.game_id + '/plugins', release);
  }

  removePluginFromGame(pluginId: number): Observable<any> {
    return this.http.delete(this.rootPath + 'games/' + this.game_id + '/plugins/' + pluginId);
  }

  getAllPluginsOfGame(gameId: number): Observable<GamePlugin[]> {
    return this.http.get<GamePlugin[]>(this.rootPath + 'games/' + gameId + '/plugins');
  }

  /* tested ^^^^*/


  getAllJsonContentByGameId(gameId: number): Observable<any> {
    return this.http.get(this.url + 'installed/contents/' + gameId);
  }

  getDesignerFile(name: string): Observable<DesignerModel> {

    if (typeof name !== 'undefined') {
      return this.http.get<DesignerModel>(this.url + 'designer/' + name);
    } else {
      return new Observable<DesignerModel>();
    }
  }

  getJsonContentByGameIdPluginIdAndName(gameId: number, pluginId: number, name: string): Observable<any> {
    return this.http.get(this.url + 'installed/contentByName/' + gameId + '/' + pluginId + '/' + name);
}

  saveUpdatedPlugins(form: any, game_id: number): Observable<any> {
    return this.http.put(this.url + 'installed/update/' + game_id, form);
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

  stringBeforeUnderscore(str): string {
    if (str === '') {
      return str;
    } else {
      const index = str.indexOf('_');
      return str.substring(0, index);
    }
  }

  /**
   * In this function we will declare form controls and we will add to form, values from data file
   * this is only for JSON files with config-type design
   *
   * @param form
   * @param dataFile
   * @param designerFile
   */
  addControlsToConfigTypeForm(form: FormGroup, dataFile: any,  designerFile: DesignerModel): any {
    try {
      const designer = designerFile?.designer || {};
      for (const items in designer) {
        for (const componentItem in designer[items]?.components) {
          const componentItemTitle = this.stringBeforeDot(componentItem);        // this will be the name of group //
          const controlTitle = this.stringAfterDot(componentItem);               // this will be the name of control //
          form.addControl(componentItemTitle, this.fb.group({}));
          const controlType = designer[items]?.components[componentItem]?.type;      // this will be the type of control //
          if (controlType.includes('array')) {
            (form.get(componentItemTitle) as FormGroup).addControl(controlTitle, this.fb.array([]));
            if (Object.keys(dataFile)?.length > 0) {              // check if dataFile has values to add to form //
              const data = (dataFile[componentItemTitle][controlTitle]);
              for (const value of data) {             // iterate and add values to formArray //
                ((form.get(componentItemTitle) as FormGroup).get(controlTitle) as FormArray).push(this.fb.control(value));
              }
            }
          } else {
            if (Object.keys(dataFile)?.length > 0) {
              const data = (dataFile[componentItemTitle][controlTitle]);
              (form.get(componentItemTitle) as FormGroup).addControl(controlTitle, this.fb.control(data));
            } else {     // if there is no data values, just add the control //
              (form.get(componentItemTitle) as FormGroup).addControl(controlTitle, this.fb.control(''));
            }
          }
        }
      }
      return form;
    } catch (error: any) {
      return false;
    }
  }


  /**
   * In this function we will declare form controls and we will add to form, values from data-file
   * this is only for JSON files with data-type design
   *
   * @param form
   * @param dataFile
   * @param designer
   */
  addControlsToDataTypeForm(form: FormGroup, dataFile: any, designer: DesignerModel): FormGroup {

    form.addControl(designer?.file, this.fb.array([]));
    const designerItems = designer?.designer || {};
    const dataContents = dataFile[designer?.file];
    const arrayOfControls = [];

    for (const itemName in designerItems) {
      for (const componentItem in designerItems[itemName].components) {
         const controlType = (designerItems[itemName].components[componentItem].type);
         const controlName = componentItem;
         arrayOfControls.push({'name': controlName, 'type': controlType});
      }
    }

    for (const groupName in dataContents) {
      const newGroup = this.fb.group({});
      for(const control of arrayOfControls) {
        const values = dataContents[groupName][control.name];
        if (control.type.includes('array')) {
          newGroup.addControl(control.name, this.fb.array([]));
          if (typeof values !== 'undefined') {
              (newGroup.get(control.name) as FormArray).clear();
              for (const value of values) {
                (newGroup.get(control.name) as FormArray).push(this.fb.control(value));
              }
          }
        } else {
          newGroup.addControl(control.name, this.fb.control(''));
          if(typeof values !== 'undefined') {
            newGroup.get(control.name).setValue(values);
          }
        }
      }
      (form.get(designer?.file) as FormArray).push(newGroup);
    }
    return form;
  }

  sendUpdate(message) { // the component that wants to update something, calls this fn
    this.signalForUpdate.next({ signal: message }); // next() will feed the value in Subject
  }

  getUpdate(): Observable<any> { // the receiver component calls this function
    return this.signalForUpdate.asObservable(); // it returns as an observable to which the receiver funtion will subscribe
  }

}
