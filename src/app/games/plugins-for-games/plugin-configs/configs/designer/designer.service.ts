import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RootDesigner} from '../../../../../classes/rootDesignerClass/root-designer';

@Injectable({
  providedIn: 'root'
})
export class DesignerService {

  constructor(private http: HttpClient) {}

  getDefaultConfigDesigner(): Observable<RootDesigner> {
    const defaultConfigUrl = 'assets/dummyJson/defaults_config_designer.json';

    return this.http.get<RootDesigner>(defaultConfigUrl);
  }


}
