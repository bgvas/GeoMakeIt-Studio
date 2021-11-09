import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Plugin} from '../../models/plugin';
import {User} from '../../../user-management/models/user';
import {UserService} from '../../../user-management/services/user.service';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {Subject} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';
import {PluginRelease} from '../../models/available_plugins/plugin-release';
import {PluginService} from '../../services/plugin.service';
import {GamePluginsService} from '../../../gamePlugins/services/game-plugins.service';
import {pluginReleasePostRequestModel} from '../../models/plugin-release-post-request-model';
import {GamePlugin} from '../../../gamePlugins/models/game-plugin';
import {Game} from '../../../games/models/games/game';
import {AddGamePluginRequestModel} from '../../../gamePlugins/models/add-game-plugin-request-model';

@Component({
  selector: 'app-plugin-card-for-game-settings',
  templateUrl: './plugin-card-for-game-settings.component.html',
  styleUrls: ['./plugin-card-for-game-settings.component.css']
})
export class PluginCardForGameSettingsComponent implements OnInit, OnDestroy {

  @Input() availablePluginFromList?: Plugin;
  @Input() selectedGamePluginToDisplay?: GamePlugin;
  @Input() isSelectedPlugin?: boolean;
  @Output() selectedGamePlugin = new EventEmitter<any>();
  @Output() removeSelectedGamePlugin = new EventEmitter<any>();
  isClickedAddButton?: boolean;
  creatorOfPlugin?: User;
  errorMessage = null;
  pluginReleaseFromList?: PluginRelease;
  selectedPluginToDisplay?: Plugin;
  pluginReleasesList = Array<PluginRelease>();
  defaultRelease?: PluginRelease;
  selectedPluginReleaseToDisplay?: PluginRelease;
  selectedGame = <Game>JSON.parse(sessionStorage.getItem('project'));
  unsubscribe = new Subject<void>();

  constructor(private userService: UserService, private pluginService: PluginService, private gamePluginService: GamePluginsService) { }

  ngOnInit(): void {
      if (!this.isSelectedPlugin) {
        this.getCreatorOfPlugin(this.availablePluginFromList?.user_id || 0);
        this.getListOfPluginReleases(this.availablePluginFromList?.id || 0);
      }
      if (this.isSelectedPlugin) {
          if (!this.selectedGamePluginToDisplay) {
              this.errorMessage = 'Error on add plugin'
          } else {
              this.getPluginById(this.selectedGamePluginToDisplay?.plugin_id || 0);
              this.getSelectedReleaseById(this.selectedGamePluginToDisplay?.plugin_release_id || 0)
        }
      }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // add plugin to game //
  onClickAdd() {
    this.isClickedAddButton = true; // change color of add-button on click //
    const addPluginToGame = new AddGamePluginRequestModel();
    addPluginToGame.plugin_release_id = this.pluginReleaseFromList?.id;
      // add selectedPlugin to db //
    this.gamePluginService.addPluginToGame(addPluginToGame)
      .pipe(take(1)).subscribe(addedGamePlugin => {
          this.selectedGamePlugin.emit(addedGamePlugin['data']); // send selectedGamePlugin release to selectedPlugins list box //
      },
      (error: ErrorResponseModel) => {
          console.log(error.message, error.errors)
      })
  }


  onChangeSelectionInList(item) {
   this.pluginReleaseFromList = item.value;
  }

  onRemove() {
      const removedGamePlugin = new GamePlugin();
      if(this.selectedPluginReleaseToDisplay.plugin_id !== 1) {
          removedGamePlugin.plugin_release_id = this.selectedPluginReleaseToDisplay.id;
          removedGamePlugin.game_id = this.selectedGame.id;
          removedGamePlugin.plugin_id = this.selectedPluginReleaseToDisplay.plugin_id;
          removedGamePlugin.enabled = true;
          this.removeSelectedGamePlugin.emit(removedGamePlugin);
          this.gamePluginService.removePluginFromGame(this.selectedGame?.id, this.selectedPluginToDisplay?.id).pipe(take(1)).subscribe(removeResult => {
                  this.removeSelectedGamePlugin.emit(this.selectedPluginReleaseToDisplay);
              },
              (error: ErrorResponseModel) => {
                  console.log(error.message, error.errors)
              })
      }
  }

  getCreatorOfPlugin(id: number) {
    this.userService.getUser(id).pipe(take(1)).subscribe(user => {
      this.creatorOfPlugin =  user['data'];
    },
        (error: ErrorResponseModel) => {
          console.log(error.message, error.errors)
        })
  }

    getSelectedReleaseById(id: number) {
      this.pluginService.getReleaseById(id).pipe(take(1)).subscribe(release => {
          this.selectedPluginReleaseToDisplay = release['data'];
      })
    }

  getListOfPluginReleases(pluginId: number) {
      this.pluginService.getPluginReleasesById(pluginId).pipe(take(1)).subscribe(releases => {
        this.pluginReleasesList = releases['data'];
        this.defaultRelease = this.pluginReleasesList[this.pluginReleasesList?.length - 1];
        this.pluginReleaseFromList = this.defaultRelease;
      },
          (error: ErrorResponseModel) => {
        console.log(error.message, error.errors)
      })
  }

  getPluginById(id: number) {
     this.pluginService.getPluginById(id).pipe(take(1)).subscribe(plugin => {
       this.selectedPluginToDisplay = plugin['data'] || [];
       this.getCreatorOfPlugin(this.selectedPluginToDisplay.user_id);
     },
         (error: ErrorResponseModel) => {
           console.log(error.message, error.errors)
         })
  }

}
