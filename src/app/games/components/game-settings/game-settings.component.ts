import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Game} from '../../models/games/game';
import {PluginService} from '../../../plugins/services/plugin.service';
import {Plugin} from '../../../plugins/models/plugin';
import {Subject} from 'rxjs';
import {map, take, takeUntil} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GameService} from '../../services/game.service';
import {ProjectUpdateModel} from '../../models/projectElements/project-update-model';
import {GamePluginDataService} from '../../../gamePlugins/services/gamePluginData.service';
import {GamePluginsService} from '../../../gamePlugins/services/game-plugins.service';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {PluginRelease} from '../../../plugins/models/available_plugins/plugin-release';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {GamePlugin} from '../../../gamePlugins/models/game-plugin';
import {PublicService} from '../../../public.service';
import {GameAuthenticationModel} from '../../models/gameAuthentication/GameAuthenticationModel';
import {GamePluginDataModel} from '../../../gamePlugins/models/game-plugin-data-model';


@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})


export class GameSettingsComponent implements OnInit, OnDestroy  {


  @Input() isStepper: boolean;
  allAvailablePlugins: Plugin[];
  projectForm: FormGroup;
  unsubscribe = new Subject<void>();
  selectedPluginReleases = Array<PluginRelease>();
  useAuthentication = false;
  isLoading: boolean;
  check_by_email = false;
  allow_anonymous = false;
  isLoadingAvailable: boolean;
  project: Game = JSON.parse(sessionStorage.getItem('project') || null);
  mainPlugin?: GamePlugin;
  configGameDataFile?: any;
  private mainGamePlugin: any;


  constructor(private pluginService: PluginService, private fb: FormBuilder,
              private projectService: GameService, private gamePluginDataService: GamePluginDataService,
              private gamePluginService: GamePluginsService, private location: Location, private router: Router,
              private publicService: PublicService) { }


  ngOnInit(): void {
    if(this.project === null) {
      this.router.navigate(['home']);
    }
        this.getGamePluginsDataOfGeoMakeItApi();
        this.initializeProjectForm();
        this.getMainPlugin();
        this.getConfigFileFromGeoMakeItApi()


  }


  // on exit, unsubscribe all//
  ngOnDestroy() {
    this.saveChanges();
    this.updateGameAuth();
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log('exit');
  }

  getMainPlugin() {
    this.gamePluginService.getAllPluginsOfGame(this.project?.id)
        .pipe(takeUntil(this.unsubscribe)).subscribe(gamePlugins => {
          this.mainPlugin = gamePlugins['data'].filter(e => e.plugin_id === 1).pop();
        },
        (e: ErrorResponseModel) => {
          console.log(e.message, e.errors);
        })
  }

  initializeProjectForm() {
    this.projectForm = this.fb.group({
      title: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required),
      use_auth: this.fb.control(false, ),
      check_by_email: this.fb.control(''),
      allow_anonymous: this.fb.control('')
    })
    this.setValuesToProjectForm();
  }


  setValuesToProjectForm() {
    this.projectForm.get('title').setValue(this.project?.title);
    this.projectForm.get('description').setValue(this.project?.description);
  }


  saveChanges() {
    if ( this.projectForm.valid) {
      const projectToUpdate = new ProjectUpdateModel();
      projectToUpdate.title = this.projectForm.get('title').value;
      projectToUpdate.description = this.projectForm.get('description').value;

      this.projectService.updateGame(this.project.id, projectToUpdate)
          .pipe(take(1))
          .subscribe(updatedGame => {
            sessionStorage.setItem('project', JSON.stringify(updatedGame['data']));
            this.publicService.setProject(updatedGame['data']);
            console.log('changes saved');
          },
          (e: ErrorResponseModel) => {
            console.log(e.message, e.errors);
          });
    }
  }

  updateGameAuth() {
    // create object for game authentication //
    const gameAuth = new GameAuthenticationModel();

    gameAuth.authentication.enabled = this.projectForm.get('use_auth').value;
    if (this.projectForm.get('use_auth').value) {
      if (this.projectForm.get('check_by_email').value) {
        gameAuth.authentication.providers.push('email');
      }
      if (this.projectForm.get('allow_anonymous').value) {
        gameAuth.authentication.providers.push('anonymous');
      }
    }
    const objectToUpdate = this.gamePluginDataService.toGamePluginDataUpdateRequest('config', this.gamePluginDataService.convertToString(gameAuth));
    this.gamePluginDataService.updateGamePluginData(this.project.id, this.mainPlugin?.plugin_release_id, objectToUpdate)
        .pipe(take(1)).subscribe(response => {
        },
        (error: ErrorResponseModel) => {
          console.log(error.message, error.errors);
        })
  }

  // get values from geoMakeIt main plugin, (file-name:config) //
  getConfigFileFromGeoMakeItApi() {
    this.gamePluginDataService.getGamePluginDataOfMainPlugin(this.project.id).pipe(takeUntil(this.unsubscribe)).subscribe((gamePlugin: GamePluginDataModel[]) => {
      const mainPlugin_configFile = (<GamePluginDataModel[]>gamePlugin['data']).filter(e => e.name === 'config');
      const gameAuth = JSON.parse((mainPlugin_configFile.pop()).contents);
      console.log(gameAuth)

      if (typeof gameAuth?.authentication !== 'undefined') {
        this.useAuthentication = gameAuth.authentication.enabled;
        this.projectForm.get('use_auth').setValue(gameAuth.authentication.enabled);
        this.projectForm.get('check_by_email').setValue(gameAuth.authentication.providers.includes('email'));
        this.projectForm.get('allow_anonymous').setValue(gameAuth.authentication.providers.includes('anonymous'));
      } else {
        this.useAuthentication = false;
        this.projectForm.get('use_auth').setValue(false);
        this.projectForm.get('check_by_email').setValue(false);
        this.projectForm.get('allow_anonymous').setValue(false);
      }
    },
        (e: ErrorResponseModel) => {
          console.log(e.message, e.errors);
        });
  }

  // get all geoMakeIt main plugin data of this project//
  getGamePluginsDataOfGeoMakeItApi() {
    this.gamePluginDataService.getGamePluginDataOfMainPlugin(this.project?.id).pipe(takeUntil(this.unsubscribe)).subscribe(mainGamePlugin => {
      this.mainGamePlugin = mainGamePlugin;
    })
  }

  // use auth to game //
  use_auth(event) {
      this.useAuthentication = event.checked;
  }

  // auth for game by email //
  checkByEmail(event) {
    this.check_by_email = event.checked;
  }

  // auth for game without details //
  anonymous_auth(event) {
    this.allow_anonymous = event.checked;
  }


}
