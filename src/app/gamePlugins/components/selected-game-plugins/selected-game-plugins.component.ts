import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {GamePluginsService} from '../../services/game-plugins.service';
import {GamePlugin} from '../../models/game-plugin';
import {Router} from '@angular/router';
import {Game} from '../../../games/models/games/game';
import {Subject} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {PluginService} from '../../../plugins/services/plugin.service';
import {Plugin} from '../../../plugins/models/plugin';
import {PluginRelease} from '../../../plugins/models/available_plugins/plugin-release';

import {InstalledGamePluginsAndPluginsOfGameModel} from '../../models/installed-gamePlugins-and-plugins-of-game-model';

@Component({
  selector: 'app-selected-game-plugins',
  templateUrl: './selected-game-plugins.component.html',
  styleUrls: ['./selected-game-plugins.component.css']
})
export class SelectedGamePluginsComponent implements OnInit, OnDestroy, OnChanges {

  @Input() gamePlugins: any;
  game = <Game>JSON.parse(sessionStorage.getItem('project')) || null;
  unsubscribe = new Subject<void>();
  plugins = new Array<Plugin>();
  //gamePlugins?: InstalledGamePluginsAndPluginsOfGameModel;
  releases = new Array<PluginRelease>();
  isLoading: boolean;

  constructor(private gamePluginService: GamePluginsService, private router: Router, private pluginService: PluginService) {
      /*this.gamePluginService.getUpdate().pipe(takeUntil(this.unsubscribe)).subscribe(reload => {
        if (reload) {
          this.getInstalledPluginsOfGame();
        }
      })*/
  }

  ngOnInit(): void {
    if(this.game === null) {
      this.router.navigate(['home']);
    }
    this.getInstalledPluginsOfGame();
  }

  ngOnChanges(changes: SimpleChanges) {
      if (typeof this.gamePlugins === 'undefined') {
          this.isLoading = true;
      } else {
            this.isLoading = false;
      }
  }


    // on exit, unsubscribe all//
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log('exit');
  }


  getInstalledPluginsOfGame() {
    /*this.isLoading = true;
    this.gamePluginService.getInstalledGamePluginsAndPluginReleases()
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(game => {
              this.gamePlugins = (<InstalledGamePluginsAndPluginsOfGameModel[]>game['data']).filter(e => e.id === this.game.id).pop();
              this.isLoading = false;
        },
            (error: ErrorResponseModel) => {
              this.isLoading = false;
              console.log(error.message, error.errors)
            })*/
  }


  deletePlugin(index: number, plugin_id: number) {
    this.gamePluginService.removePluginFromGame(plugin_id).pipe(take(1)).subscribe(deleteResult => {
      this.gamePlugins?.game_plugins.splice(index, 1);
    },
        (error: ErrorResponseModel) => {
          console.log(error.message, error.errors)
        })
  }


}
