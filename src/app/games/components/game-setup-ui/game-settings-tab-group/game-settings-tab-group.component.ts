import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {ErrorResponseModel} from '../../../../error-handling/error_response_model';
import {Subject} from 'rxjs';
import {GamePluginsService} from '../../../../gamePlugins/services/game-plugins.service';
import {PluginService} from '../../../../plugins/services/plugin.service';
import {Game} from '../../../models/games/game';
import {GamePluginDataService} from '../../../../gamePlugins/services/gamePluginData.service';
import {Router} from '@angular/router';
import {InstalledGamePluginsAndPluginsOfGameModel} from '../../../../gamePlugins/models/installed-gamePlugins-and-plugins-of-game-model';

@Component({
  selector: 'app-game-settings-tab-group',
  templateUrl: './game-settings-tab-group.component.html',
  styleUrls: ['./game-settings-tab-group.component.css']
})
export class GameSettingsTabGroupComponent implements OnInit, OnDestroy {

  unsubscribe = new Subject<void>();
  project?: Game = JSON.parse(sessionStorage.getItem('project') || null);
  gamePluginDataOfGeoMakeItApiArray = Array<InstalledGamePluginsAndPluginsOfGameModel>();
  opening: boolean
  installed?: InstalledGamePluginsAndPluginsOfGameModel;

  constructor(private gamePluginService: GamePluginsService, private pluginService: PluginService,
              private gamePluginDataService: GamePluginDataService, private router: Router) {
    this.gamePluginService.getUpdate().pipe(takeUntil(this.unsubscribe)).subscribe(reload => {
      if (reload) {
        this.getInstalledPluginsOfGame();
        this.loadGeoMakeItApiContents();
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
              this.installed = null;
              console.log(error.message, error.errors)
            })
  }

  loadGeoMakeItApiContents() {
    this.gamePluginDataService.getGamePluginDataOfMainPlugin(this.project?.id)
        .pipe(takeUntil(this.unsubscribe)).subscribe(data => {
            this.gamePluginDataOfGeoMakeItApiArray = data['data'];
        },
        (error: ErrorResponseModel) => {
          this.gamePluginDataOfGeoMakeItApiArray = [];
          console.log(error.message, error.errors);
        })
  }


  ngOnInit(): void {
    if(this.project === null) {
      this.router.navigate(['home']);
      this.opening = false;
    }
    this.getInstalledPluginsOfGame()
    this.loadGeoMakeItApiContents();
  }


  openAvailablePlugins(confirmed) {
    this.opening = true;
  }

  // on exit, unsubscribe all//
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
