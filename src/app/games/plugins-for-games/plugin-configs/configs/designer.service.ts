import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RootDesigner} from '../../../../classes/designers/rootDesignerClass/root-designer';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DesignerService {

  item: any;
  constructor(private http: HttpClient) {}

  set variable(value){
    this.item = value;
  }

  get variable(): any {
    return this.item;
  }

  getConfigDesigner(): Observable<RootDesigner> {
    const url = 'assets/dummyJson/defaults_config_designer.json';
    return this.http.get<RootDesigner>(url);
  }

  getDataDesigner(): Observable<RootDesigner> {
    const url = 'assets/dummyJson/questions_data_designer.json';
    return this.http.get<RootDesigner>(url);
  }

  getListWithJsonEditors(): Observable<any> {
    const url = 'assets/dummyJson/listWithEditors.json';
    return this.http.get(url);
  }

  getAPi(): Observable<any> {
    const url = 'http://api.geomakeit.com/v1/games';
    return this.http.get(url);
  }


}
