import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {GameAuthenticationModel} from '../../models/gameAuthentication/GameAuthenticationModel';

@Injectable({
  providedIn: 'root'
})
export class GamePluginDataService {

  gamePluginsData_path = environment.be_Url + 'gamePlugins/data'

  constructor(private http: HttpClient) { }

  getDataDefaultJsonFile(): any {
    const url = 'assets/dummyJson/defaults_config_file.json';
    return this.http.get(url);
  }

  getDataJsonFile(): any {
    const url = 'assets/dummyJson/questions_data_file.json';
    return this.http.get(url);
  }

  getBaseApiAuthConfigData(game_id): any {
    return this.http.get(this.gamePluginsData_path + '/config/' + game_id);
  }

  updateBaseApiAuthConfigData(game_id, gameAuth: GameAuthenticationModel): any {
    return this.http.put(this.gamePluginsData_path + '/config/update/' + game_id, gameAuth);
  }

}
