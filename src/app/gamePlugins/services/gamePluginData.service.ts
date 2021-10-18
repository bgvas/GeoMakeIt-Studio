import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {GameAuthenticationModel} from '../../games/models/gameAuthentication/GameAuthenticationModel';
import {Observable} from 'rxjs';
import {Game} from '../../games/models/games/game';
import {GamePluginDataNamesModel} from '../models/game-plugin-data-names-model';

@Injectable({
  providedIn: 'root'
})
export class GamePluginDataService {

  gamePluginsData_path = environment.be_Url + 'gamePlugins/data'
  rootPath = environment.be_Url;

  constructor(private http: HttpClient) { }


  getDataDefaultJsonFile(): any {
    const url = 'assets/dummyJson/defaults_config_file.json';
    return this.http.get(url);
  }

  getDataJsonFile(): any {
    const url = 'assets/dummyJson/questions_data_file.json';
    return this.http.get(url);
  }

  getBaseApiAuthConfigData(game_id): Observable<GameAuthenticationModel> {
    return this.http.get<GameAuthenticationModel>(this.gamePluginsData_path + '/config/' + game_id);
  }

  updateBaseApiAuthConfigData(game_id, gameAuth: GameAuthenticationModel): any {
    return this.http.put(this.gamePluginsData_path + '/config/update/' + game_id, gameAuth);
  }

  getGamePluginDataOfMainPlugin(project_id: number, name: string): Observable<any> {
    return this.http.get(this.rootPath + 'game-plugin-data/' + project_id + '/1/' + name);
  }



}
