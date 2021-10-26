import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {filter, map, take, takeUntil} from 'rxjs/operators';
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
import {InstalledGamePluginsAndPluginsOfGameModel} from '../../../../gamePlugins/models/installed-gamePlugins-and-plugins-of-game-model';
import {AlertDialogModel} from '../../../../gamePlugins/models/alert-dialog-model';

@Component({
  selector: 'app-game-settings-tab-group',
  templateUrl: './game-settings-tab-group.component.html',
  styleUrls: ['./game-settings-tab-group.component.css']
})
export class GameSettingsTabGroupComponent implements OnInit, OnDestroy {

  unsubscribe = new Subject<void>();
  project: Game = JSON.parse(sessionStorage.getItem('project') || null);
  gamePluginDataOfGeoMakeItApiArray = Array<GamePluginDataModel>();
  opening: boolean
  installed?: InstalledGamePluginsAndPluginsOfGameModel;

  constructor(private gamePluginService: GamePluginsService, private pluginService: PluginService,
              private gamePluginDataService: GamePluginDataService, private router: Router) {
    this.gamePluginService.getUpdate().pipe(takeUntil(this.unsubscribe)).subscribe(reload => {
      if (reload) {
        this.getInstalledPluginsOfGame();
      }
    })
  }

  getInstalledPluginsOfGame() {
    this.gamePluginService.getInstalledGamePluginsAndPluginReleases()
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(game => {
              this.installed = (<InstalledGamePluginsAndPluginsOfGameModel[]>game['data']).filter(e => e.id === this.project.id).pop();
            },
            (error: ErrorResponseModel) => {
              console.log(error.message, error.errors)
            })
  }


  ngOnInit(): void {
    if(this.project === null) {
      this.router.navigate(['home']);
      this.opening = false;
    }
    this.getInstalledPluginsOfGame()
  }


  openAvailablePlugins() {
    this.opening = true;
  }

  // on exit, unsubscribe all//
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log('exit');
  }





}
