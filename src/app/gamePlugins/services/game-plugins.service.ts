import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {GamePluginDataNamesModel} from '../models/game-plugin-data-names-model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {designerModel} from '../models/designer-model';
import {file} from 'googleapis/build/src/apis/file';

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

  getDesignerFile(name: string, designer_type: string): Observable<designerModel> {
    const fileName = name + '_' + designer_type + '_designer.json';
    return this.http.get<designerModel>(this.url + fileName);
  }
}
