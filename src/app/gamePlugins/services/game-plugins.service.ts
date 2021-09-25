import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {GamePluginDataNamesModel} from '../models/game-plugin-data-names-model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ConfigDesignerModel} from '../models/config-designer-model';

@Injectable({
  providedIn: 'root'
})
export class GamePluginsService {

  private url = 'assets/dummyJson/'

  constructor(private http: HttpClient) { }

  getGamePluginDataJsonFiles(game_id): Observable<GamePluginDataNamesModel[]> {
    return this.http.get<GamePluginDataNamesModel[]>(this.url + 'gamePluginDataNames.json');
  }

  getJsonFileContentByPluginIdAndJsonFileName(pluginId: number, jsonFileName: string): Observable<any> {
    return this.http.get(this.url + 'questions_data_file.json')
  }

  getAllJsonContentByGameId(gameId: number): Observable<any> {
    return this.http.get(this.url + 'pluginsByGameId.json')
  }

  getConfigDesignerFile(name: string): Observable<ConfigDesignerModel> {
    return this.http.get<ConfigDesignerModel>(this.url + name );
  }
}
