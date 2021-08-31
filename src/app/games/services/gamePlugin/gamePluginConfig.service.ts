import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RootDesigner} from '../../models/designers/rootDesignerClass/root-designer';
import {environment} from '../../../../environments/environment';
import {ZonesEditor} from '../../../plugins/models/designer-models/zones/ZonesEditor';

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

  /*getConfigDesigner(): Observable<RootDesigner> {
    const url = 'assets/dummyJson/defaults_config_designer.json';
    return this.http.get<RootDesigner>(url);
  }*/

  /*getDataDesigner(): Observable<RootDesigner> {
    const url = 'assets/dummyJson/questions_data_designer.json';
    return this.http.get<RootDesigner>(url);
  }*/

  /*getAllInstalledPluginsOfAGame(game_id): Observable<GamePlugin> {

  }
*/
  getListWithJsonEditors(): Observable<any> {
    const url = 'assets/dummyJson/listWithEditors.json';
    return this.http.get(url);
  }

  getAPi(): Observable<any> {
    const url = 'http://api.geomakeit.com/v1/games';
    return this.http.get(url);
  }

  getZonesFromDB(game_id: number): Observable<ZonesEditor[]> {
    return this.http.get<ZonesEditor[]>(this.gamePlugins_path + 'zones/' + game_id)
  }

  updateZones(game_id: number, zones: any): Observable<any> {
    return this.http.post(this.gamePlugins_path + 'zones/update/' + game_id , zones);
  }


}
