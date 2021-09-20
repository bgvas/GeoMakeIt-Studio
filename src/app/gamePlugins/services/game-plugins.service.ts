import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {GamePluginDataNamesModel} from '../models/game-plugin-data-names-model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamePluginsService {

  private url = 'assets/dummyJson/'

  constructor(private http: HttpClient) { }

  getGamePluginDataJsonFiles(game_id): Observable<GamePluginDataNamesModel[]> {
    return this.http.get<GamePluginDataNamesModel[]>(this.url + 'gamePluginDataNames.json');
  }

  getNamesOfGamePluginDataJsonFiles(game_id): Observable<any> {
    return this.getGamePluginDataJsonFiles(game_id).pipe(map(gamePlugin => gamePlugin.forEach(e => {return e.json_file_name})));
  }
}
