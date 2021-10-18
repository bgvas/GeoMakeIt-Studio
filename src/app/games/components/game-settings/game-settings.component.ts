import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Game} from '../../models/games/game';
import {PluginService} from '../../../plugins/services/plugin.service';
import {Plugin} from '../../../plugins/models/plugin';
import {Observable, Subject} from 'rxjs';
import {map, take, takeUntil} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GameService} from '../../services/game.service';
import {ProjectUpdateModel} from '../../models/projectElements/project-update-model';
import {Subscription} from 'rxjs/Subscription';
import {GamePluginDataService} from '../../../gamePlugins/services/gamePluginData.service';
import {GamePluginsService} from '../../../gamePlugins/services/game-plugins.service';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {PluginRelease} from '../../../plugins/models/available_plugins/plugin-release';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {GamePlugin} from '../../../gamePlugins/models/game-plugin';
import {PublicService} from '../../../public.service';
import {GameAuthenticationModel} from '../../models/gameAuthentication/GameAuthenticationModel';



@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})


export class GameSettingsComponent implements OnInit, OnDestroy  {

  @Input() submitFromStepper: Observable<void>;
  @Input() isStepper: boolean;
  allAvailablePlugins: Plugin[];
  projectForm: FormGroup;
  unsubscribe = new Subject<void>();
  selectedPlugins = [];
  selectedPluginReleases = Array<PluginRelease>();
  useAuthentication = false;
  check_by_email = false;
  allow_anonymous = false;
  isLoadingAvailable: boolean;
  isLoadingSelected: boolean;
  allPluginsOfGame = Array<GamePlugin>();
  project: Game = JSON.parse(sessionStorage.getItem('project'));
  private submitEvent: Subscription;


  constructor(private pluginService: PluginService, private fb: FormBuilder,
              private projectService: GameService, private gamePluginDataService: GamePluginDataService,
              private gamePluginService: GamePluginsService, private location: Location, private router: Router,
              private publicService: PublicService) { }


  ngOnInit(): void {
        this.getAllAvailablePlugins();
        this.getAllPluginsOfGame(this.project.id);
        this.initializeProjectForm();
        this.getGameAuthFromBaseApi();
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


  getAllPluginsOfGame(gameId: number) {
    this.isLoadingSelected = true;
    this.gamePluginService.getAllPluginsOfGame(this.project?.id)
        .pipe(takeUntil(this.unsubscribe)).subscribe(gamePlugins => {
         this.allPluginsOfGame = gamePlugins['data'];
          this.isLoadingSelected = false;
    },
        (e: ErrorResponseModel) => {
          this.isLoadingSelected = false;
          console.log(e.message, e.errors);
        })
  }


  // on exit, unsubscribe all//
  ngOnDestroy() {
    this.saveChanges();
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log('exit');
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

  // plugins that selected from plugin-card for gameSettings //
  returnedSelectedPlugins(gamePlugins) {
      this.allPluginsOfGame.push(gamePlugins);
  }

  // Remove plugins-card from selectedPlugins box //
  removeGamePluginFromArray(gamePlugin: GamePlugin) {
      const index = this.allPluginsOfGame.findIndex(e => e.plugin_id === gamePlugin.plugin_id
          && e.game_id === gamePlugin.game_id && e.plugin_release_id === gamePlugin.plugin_release_id);
      this.allPluginsOfGame.splice(index, 1);
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

      // update game authentication in base plugin (name: config) //
     /*this.gamePluginDataService.updateBaseApiAuthConfigData(this.project.id, gameAuth).pipe(takeUntil(this.unsubscribe)).subscribe(auth => {
        console.log(auth.message);
      },
          (error: ErrorResponseModel) => {
            console.log(error.message , error.errors);
          })*/
    }
  }

  // save a isSelectedPlugin plugin from list, to db in GamePlugins table //
 /* addPluginToProject(installedPlugin: SelectedPlugin) {
       this.projectService.addPluginToProject(installedPlugin).pipe(takeUntil(this.unsubscribe)).subscribe(installPlugin => {
             console.log('Plugin added!')
           },
           (e: ErrorResponseModel) => {
             console.log(e.message, e.errors);
           }
       )
  }*/

  // get values from geoMakeIt main plugin, (name:config) //
  getGameAuthFromBaseApi() {
    this.gamePluginDataService.getGamePluginDataOfMainPlugin(this.project?.id, 'config')
        .pipe(takeUntil(this.unsubscribe)).subscribe(mainPlugin_configFile => {
          const gameAuth = <GameAuthenticationModel>JSON.parse(mainPlugin_configFile?.data?.contents)

      if (typeof gameAuth.authentication !== 'undefined') {
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
        (error: ErrorResponseModel) => {
          console.log(error.message, error.errors);
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

  onCancel() {
    this.projectForm.reset();
    this.location.back();
  }

}
