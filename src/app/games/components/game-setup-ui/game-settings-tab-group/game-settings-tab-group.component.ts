import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {map, take, takeUntil} from 'rxjs/operators';
import {ErrorResponseModel} from '../../../../error-handling/error_response_model';
import {Subject} from 'rxjs';
import {GamePluginsService} from '../../../../gamePlugins/services/game-plugins.service';
import {PluginService} from '../../../../plugins/services/plugin.service';
import {Plugin} from '../../../../plugins/models/plugin';
import {Game} from '../../../models/games/game';
import {GamePlugin} from '../../../../gamePlugins/models/game-plugin';
import {GamePluginDataModel} from '../../../../gamePlugins/models/game-plugin-data-model';
import {GamePluginDataService} from '../../../../gamePlugins/services/gamePluginData.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-settings-tab-group',
  templateUrl: './game-settings-tab-group.component.html',
  styleUrls: ['./game-settings-tab-group.component.css']
})
export class GameSettingsTabGroupComponent implements OnInit, OnDestroy {
  isLoadingSelected: boolean;
  unsubscribe = new Subject<void>();
  project: Game = JSON.parse(sessionStorage.getItem('project') || null);
  allPluginsOfGame = Array<GamePlugin>();
  isLoadingAvailable: boolean;
  allAvailablePlugins: Plugin[];
  mainPlugin: GamePlugin;
  gamePluginDataOfGeoMakeItApiArray = Array<GamePluginDataModel>();

  constructor(private gamePluginService: GamePluginsService, private pluginService: PluginService,
              private gamePluginDataService: GamePluginDataService, private router: Router) { }

  ngOnInit(): void {
    if(this.project === null) {
      this.router.navigate(['home']);
    }
    this.getAllAvailablePlugins();
    this.getAllPluginsOfGame(this.project?.id);
    this.getGamePluginsDataOfGeoMakeItApi();
    this.getOtherFilesFromGeoMakeItApi()
  }

  // on exit, unsubscribe all//
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log('exit');
  }

  // plugins that selected from plugin-card for gameSettings //
  returnedSelectedPlugins(gamePlugins) {
    this.allPluginsOfGame.push(gamePlugins);
  }

  // Remove plugins-card from selectedPlugins box //
  removeGamePlugin(gamePlugin: GamePlugin) {
    const index = this.allPluginsOfGame.findIndex(e => e.plugin_id === gamePlugin.plugin_id
        && e.game_id === gamePlugin.game_id && e.plugin_release_id === gamePlugin.plugin_release_id);
    this.allPluginsOfGame.splice(index, 1);
  }

  getAllPluginsOfGame(gameId: number) {
    this.isLoadingSelected = true;
    this.gamePluginService.getAllPluginsOfGame(this.project?.id)
        .pipe(takeUntil(this.unsubscribe)).subscribe(gamePlugins => {
          this.allPluginsOfGame = gamePlugins['data'];
          this.mainPlugin = this.allPluginsOfGame.filter(e => e.plugin_id === 1).pop();
          this.isLoadingSelected = false;
        },
        (e: ErrorResponseModel) => {
          this.isLoadingSelected = false;
          console.log(e.message, e.errors);
        })
  }

  getAllAvailablePlugins() {
    this.isLoadingAvailable = true;
    this.pluginService.getAllPlugins().pipe(takeUntil(this.unsubscribe)).subscribe(projects => {
          this.allAvailablePlugins = projects.data; // display all available plugins//
          this.isLoadingAvailable = false;
        },
        (e: ErrorResponseModel) => {
          this.isLoadingAvailable = false;
          console.log(e.message, e.errors);
        })
  }

  // get all geoMakeIt main plugin data of this project//
  getGamePluginsDataOfGeoMakeItApi() {
    return this.gamePluginDataService.getGamePluginDataOfMainPlugin(this.project?.id).pipe(
        map(project => {
          return project.data.filter((e: GamePluginDataModel) => e.plugin_release_id === this.mainPlugin.plugin_release_id);
        }))
  }

  getOtherFilesFromGeoMakeItApi() {
    this.getGamePluginsDataOfGeoMakeItApi().pipe(take(1)).subscribe((gamePlugin: GamePluginDataModel[]) => {
          this.gamePluginDataOfGeoMakeItApiArray = gamePlugin.filter(gp => gp.name !== 'config' && gp.name !== 'zones');
          this.gamePluginDataOfGeoMakeItApiArray.forEach(e => e.contents = JSON.parse(e.contents));
          this.gamePluginDataOfGeoMakeItApiArray = this.gamePluginDataOfGeoMakeItApiArray.filter(e => e.name === 'alert_dialogs');
        },
        (e: ErrorResponseModel) => {
          console.log(e.message, e.errors);
        });
  }

}
