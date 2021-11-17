import {Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter, OnDestroy, ViewChild} from '@angular/core';
import {take, takeUntil} from 'rxjs/operators';
import {PluginService} from '../../services/plugin.service';
import {PluginRelease} from '../../models/available_plugins/plugin-release';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../../user/services/user.service';
import {User} from '../../../user/models/user';
import {GamePluginsService} from '../../../gamePlugins/services/game-plugins.service';
import {Game} from '../../../games/models/games/game';
import {Router} from '@angular/router';
import {AddGamePluginRequestModel} from '../../../gamePlugins/models/add-game-plugin-request-model';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-select-release-of-plugin',
  templateUrl: './select-release-of-plugin.component.html',
  styleUrls: ['./select-release-of-plugin.component.css']
})
export class SelectReleaseOfPluginComponent implements OnInit, OnChanges, OnDestroy  {

  @Input() plugin_id?: number;
  @Input() user_id?: number;
  @Output() isSelectedRelease = new EventEmitter<any>();
  @Output() creator = new EventEmitter<any>();
  pluginReleasesArray = Array<PluginRelease>();
  selection?: PluginRelease;
  isSelected?: boolean;
  downloadResult?: any;
  formSelect: FormGroup;
  defaultRelease?: PluginRelease;
  unsubscribe = new Subject<void>();
  game = <Game>JSON.parse(sessionStorage.getItem('project')) || null;

  constructor(private pluginService: PluginService, private gamePluginService: GamePluginsService,
              private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if(this.game === null) {
      this.router.navigate(['home']);
    }
    this.initializeForm();
    this.downloadResult = null;
  }

  // on exit, unsubscribe all//
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log('exit');
  }

  initializeForm() {
    this.formSelect = this.fb.group({
      select: this.fb.control('')
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getListOfPluginReleases(this.plugin_id);
    this.getCreatorOfPlugin(this.user_id);
  }

  getListOfPluginReleases(pluginId: number) {
    this.pluginService.getPluginReleasesById(pluginId).pipe(take(1)).subscribe(release => {
      this.pluginReleasesArray = <PluginRelease[]>release['data']
      this.defaultRelease = this.pluginReleasesArray[(this.pluginReleasesArray?.length || 0) - 1] ;
      this.isSelectedRelease.emit(this.defaultRelease);
      this.formSelect.get('select').setValue(this.defaultRelease);
    },
        (error: ErrorResponseModel) => {
          console.log(error.message, error.errors)
        });
  }

  selectedRelease(event) {
    const index = event.target.options.selectedIndex;
    this.defaultRelease = (event.target[index].__ngContext__)[22]; // event structure //
    this.isSelectedRelease.emit(this.defaultRelease);
  }


  onDownloadClick() {
    this.downloadResult = null;
    const _release = new AddGamePluginRequestModel();
    _release.plugin_release_id = this.defaultRelease?.id;
    _release.enabled = true;
    this.gamePluginService.addPluginToGame(_release)
        .pipe(take(1)).subscribe(gamePlugin => {
        if(typeof gamePlugin['message'] !== 'undefined') {
          this.downloadResult = false;
        } else {
          this.isSelected = true;
          this.downloadResult = true;
          this.gamePluginService.sendUpdate(true);
        }

    },
        (error: ErrorResponseModel) => {
          console.log(error.message, error.errors)
        });
  }


  getPopularity(installs: number): number[] {
    if(installs < 5) {
      return [1];
    }
    if(installs < 25) {
      return [1, 2];
    }
    if(installs < 45) {
      return [1, 2, 3];
    }
    if(installs < 65) {
      return [1, 2, 3, 4];
    } else {
      return [1, 2, 3, 4, 5];
    }
  }

  getCreatorOfPlugin(user_id: number) {
    this.userService.getUser(user_id).pipe(take(1))
        .subscribe(user => {
          this.creator.emit(<User>user['data'])
        },
            (error: ErrorResponseModel) => {
              console.log(error.message, error.errors)
            });
  }
}
