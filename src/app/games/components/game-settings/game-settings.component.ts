import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Game} from '../../models/games/game';
import {PluginService} from '../../../plugins/services/plugin.service';
import {Plugin} from '../../../plugins/models/plugin';
import {Error} from '../../../classes/error/error';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SelectedPlugin} from '../../../plugins/models/selectedPlugin/selected-plugin';
import {GameService} from '../../services/game.service';
import {projectElements} from '../../models/projectElements/project-elements';
import {Subscription} from 'rxjs/Subscription';
import {GamePluginDataService} from '../../services/gamePlugin/gamePluginData.service';
import {GameAuthenticationModel} from '../../models/gameAuthentication/GameAuthenticationModel';




@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})


export class GameSettingsComponent implements OnInit, OnDestroy  {

  @Input() project: Game;
  @Input() isModal: boolean;
  @Input() submitFromStepper: Observable<void>;

  availablePlugins: Plugin[];
  logo: any;
  projectForm: FormGroup;
  unsubscribe = new Subject<void>();
  selectedPlugins = [];
  useAuthentication = false;
  check_by_email = false;
  allow_anonymous = false;
  private submitEvent: Subscription;


  constructor(private pluginService: PluginService, private fb: FormBuilder, private projectService: GameService, private gamePluginDataService: GamePluginDataService) { }

  ngOnInit(): void {

    this.getInstalledPlugins();
    this.logo = 'assets/img/logo-icon.png'; // default logo for new project //
    this.pluginService.getAllPlugins().pipe(takeUntil(this.unsubscribe)).subscribe(projects => {
      this.availablePlugins = projects['plugin'].filter((e: Plugin) => e.id !== 1); // display all available plugins except basic Plugin//
        },
        (e: Error) => {
          console.log('Game settings(Available plugins): ' + e.message + ' - ' + e.code);
        })
    this.initializeProjectForm();
    this.getGameAuthFromBaseApi();

    // when submit comes from stepper-wizard //
    if (typeof this.submitFromStepper !== 'undefined') {
      this.submitEvent = this.submitFromStepper?.pipe(takeUntil(this.unsubscribe)).subscribe(submit => {
        this.onSubmit();
      })
    }
  }

  // on exit, unsubscribe all//
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.submitEvent?.unsubscribe();
  }

  // if select a logo, display it //
  onLogoChange(event) {
    if ( event.target.files.length > 0 && event.target.files[0].type.includes('image/')) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.logo = reader.result;
      }
    }
  }

  onAddPlugin(plugin: Plugin) {
    if (typeof plugin !== 'undefined') {
      this.projectService.checkIfPluginIsAlreadyInstalled(this.project.id, plugin.id).pipe(takeUntil(this.unsubscribe)).subscribe(isInstalled => {
        if (!isInstalled['message']) {    // Install plugin, if is not already installed //
           this.selectedPlugins.push(plugin);
           const addPlugin = new SelectedPlugin();
           addPlugin.game_id = this.project?.id;
           addPlugin.plugin_id = plugin?.id;
           addPlugin.enabled = true;
           this.addPluginToProject(addPlugin);
        }
      })
    }
  }

  onRemovePlugin(plugin: Plugin) {
      if (typeof plugin !== 'undefined') {
        if (this.selectedPlugins.includes(plugin)) {
          this.selectedPlugins.splice(this.selectedPlugins.indexOf(plugin), 1);
          this.projectService.deleteInstalledPluginFromGame(this.project.id, plugin.id).pipe(takeUntil(this.unsubscribe)).subscribe(deletePlugin => {
            console.log(deletePlugin);
          },
              (error: Error) => {
                  console.log('Error in delete plugin from game: ' + error.message + error.code);
              }
          )
        }
      }
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


  onSubmit() {
    if ( this.projectForm.valid) {
      const projectToUpdate = new projectElements();
      projectToUpdate.title = this.projectForm.get('title').value;
      projectToUpdate.description = this.projectForm.get('description').value;
      this.projectService.updateGame(this.project.id, projectToUpdate).pipe(takeUntil(this.unsubscribe)).subscribe(update => {

          },
          (e: Error) => {
            console.log('Update elements of project: ' + e.message + ' - ' + e.code);
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
      this.gamePluginDataService.updateBaseApiAuthConfigData(this.project.id, gameAuth).pipe(takeUntil(this.unsubscribe)).subscribe(auth => {
        console.log(auth.message);
      },
          (error: Error) => {
            console.log(error.displayed_message + ' - ' + error.code);
          })
    }

  }

  // save a selected plugin from list, to db in GamePlugins table //
  addPluginToProject(installedPlugin: SelectedPlugin) {
       this.projectService.addPluginToProject(installedPlugin).pipe(takeUntil(this.unsubscribe)).subscribe(installPlugin => {
             console.log('Plugin added!')
           },
           (e: Error) => {
             console.log('Install plugin to game: ' + e.message + ' - ' + e.code);
           }
       )
  }

  // get values from geoMakeIt main plugin, (name:config) //
  getGameAuthFromBaseApi() {
    this.gamePluginDataService.getBaseApiAuthConfigData(this.project.id).pipe(takeUntil(this.unsubscribe)).subscribe(gameAuth => {
      if (gameAuth !== null) {
        this.useAuthentication = gameAuth.authentication.enabled;
        this.projectForm.get('use_auth').setValue(gameAuth.authentication.enabled);
        this.projectForm.get('check_by_email').setValue(gameAuth.authentication.providers.includes('email'));
        this.projectForm.get('allow_anonymous').setValue(gameAuth.authentication.providers.includes('anonymous'));
      }
    },
        (error: Error) => {
          console.log('Error in getGameAuth: ' + error.message);
        })
  }

  // get a list with installed plugins of game, from db (except base plugin)//
  getInstalledPlugins() {
      this.projectService.getInstalledPluginsOfGame(this.project.id).subscribe(plugins => {  // get installed plugins from dataBase //
            this.selectedPlugins = plugins.filter(e => e['id'] !== 1);  // except the basic plugin //
          },
          (e: Error) => {
            console.log('Plugins of game: ' + e.message + ' - ' + e.code)
          })
  }

  // check, before install a new plugin, if is already connected with the game //
  checkPlugin(plugin: Plugin) {
      this.projectService.checkIfPluginIsAlreadyInstalled(this.project.id, plugin.id).pipe(takeUntil(this.unsubscribe)).subscribe(e => {
       this.projectService.isInstalledPlugin = e['message'];
      });
  }

  use_auth(event) {
      this.useAuthentication = event.checked;
  }

  checkByEmail(event) {
    this.check_by_email = event.checked;
  }

  anonymous_auth(event) {
    this.allow_anonymous = event.checked;
  }



}
