import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Zones_model} from '../../../plugins/models/designer-models/zones/Zones_model';

@Injectable({
  providedIn: 'root'
})
export class GamePluginConfigService {

  item: any;
  gamePlugins_path = environment.be_Url + 'gamePlugins/';

  constructor(private http: HttpClient) {}

  set savedObject(value: any) {
    this.item = value;
  }

  get savedObject(): any {
    return this.item;
  }

  getListWithJsonEditors(): Observable<any> {
    const url = 'assets/dummyJson/listWithEditors.json';
    return this.http.get(url);
  }

  getAPi(): Observable<any> {
    const url = 'http://api.geomakeit.com/v1/games';
    return this.http.get(url);
  }

  getZonesFromDB(game_id: number): Observable<Zones_model[]> {
    return this.http.get<Zones_model[]>(this.gamePlugins_path + 'zones/' + game_id)
  }

  updateZones(game_id: number, zones: any): Observable<any> {
    return this.http.post(this.gamePlugins_path + 'zones/update/' + game_id , zones);
  }


}
