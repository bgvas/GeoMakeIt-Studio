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

@Component({
  selector: 'app-plugin-card-for-game-settings',
  templateUrl: './plugin-card-for-game-settings.component.html',
  styleUrls: ['./plugin-card-for-game-settings.component.css']
})
export class PluginCardForGameSettingsComponent implements OnInit, OnDestroy {

  @Input() pluginToDisplay?: Plugin;
  @Input() releaseToDisplay?: any;
  @Input() selected?: boolean;
  @Output() selectedPluginRelease = new EventEmitter<any>();
  @Output() removePlugin = new EventEmitter<any>();
  isSelected?: boolean;
  creator?: User;
  errorMessage = null;
  selectedRelease?: PluginRelease;
  selectedPlugin?: Plugin;
  pluginReleasesList = Array<PluginRelease>();
  defaultRelease?: PluginRelease;
  unsubscribe = new Subject<void>();

  constructor(private userService: UserService, private pluginService: PluginService, private gamePluginService: GamePluginsService) { }

  ngOnInit(): void {

      if (!this.selected) {
        this.getCreatorOfPlugin(this.pluginToDisplay?.user_id || 0);
        this.getListOfPluginReleases(this.pluginToDisplay?.id || 0);
        this.defaultRelease = this.pluginReleasesList[this.pluginReleasesList?.length - 1];
        this.selectedRelease = this.defaultRelease;
      }
      if (this.selected) {
          if (!this.releaseToDisplay) {
              this.errorMessage = 'Error on add plugin'
          } else {
              this.getPluginById(this.releaseToDisplay?.plugin_id || 0);
        }
      }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // add plugin to game //
  onClickAdd() {
    const addPluginReleaseToGame = new pluginReleasePostRequestModel();
    addPluginReleaseToGame.plugin_release_id = this.selectedRelease?.id || 0;
    this.isSelected = true; // this is a selected plugin //
    // get plugin from plugin_id of pluginRelease //
    this.getPluginById(this.selectedRelease?.plugin_id || 0);
    // add selected plugin to db //
    this.gamePluginService.addPluginToGame(addPluginReleaseToGame)
        .pipe(takeUntil(this.unsubscribe)).subscribe(addedGamePluginResult => {
            this.selectedPluginRelease.emit(this.selectedRelease); // send selected release to selectedPlugins list box //
    },
        (error: ErrorResponseModel) => {
          this.selectedPluginRelease.emit(false);
          console.log(error.message, error.errors)
        })
  }

  onSelect(item) {
   this.selectedRelease = item.value;
  }

  onRemove() {
      this.gamePluginService.removePluginFromGame(this.selectedPlugin.id).subscribe(removeResult => {
              this.removePlugin.emit(this.selectedPlugin);
      },
          (error: ErrorResponseModel) => {
              console.log(error.message, error.errors)
          })
  }

  getCreatorOfPlugin(id: number) {
    this.userService.getUser(id).pipe(takeUntil(this.unsubscribe)).subscribe(user => {
      this.creator =  user['data'];
    },
        (error: ErrorResponseModel) => {
          console.log(error.message, error.errors)
        })
  }

  getListOfPluginReleases(pluginId: number) {
      this.pluginService.getPluginReleasesById(pluginId).pipe(takeUntil(this.unsubscribe)).subscribe(releases => {
        this.pluginReleasesList = releases.data;
      },
          (error: ErrorResponseModel) => {
        console.log(error.message, error.errors)
      })
/*
     for(const rel of [1, 2, 3, 4]) {
       const release = new PluginRelease();
       release.id = rel;
       release.name = 'v-' + rel + '.0.0';
       release.plugin_id = (rel % 2) + 1;
       release.release_no = 1;
       release.created_at =  rel + '/' + rel + '/2021';
       release.updated_at =  rel + '/' + rel + '/2021'
       release.size = 120 * rel;
       release.installs = 121 * rel;
       this.pluginReleasesList.push(release);
     }*/
  }

  getPluginById(id: number) {
     this.pluginService.getPluginById(id).pipe(takeUntil(this.unsubscribe)).subscribe(plugin => {
       this.selectedPlugin = plugin['data'] || [];
       this.getCreatorOfPlugin(this.selectedPlugin.user_id);
     },
         (error: ErrorResponseModel) => {
           console.log(error.message, error.errors)
         })
  }

}
