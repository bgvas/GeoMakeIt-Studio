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
  projectForm: FormGroup;
  unsubscribe = new Subject<void>();
  isLoading: boolean;
  project: Game = JSON.parse(sessionStorage.getItem('project') || null);
  mainPlugin?: GamePlugin;
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
  }


  // on exit, unsubscribe all//
  ngOnDestroy() {
    this.saveChanges();
    this.unsubscribe.next();
    this.unsubscribe.complete();
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
          },
          (e: ErrorResponseModel) => {
            console.log(e.message, e.errors);
          });
    }
  }

  // get all geoMakeIt main plugin data of this project//
  getGamePluginsDataOfGeoMakeItApi() {
    this.gamePluginDataService.getGamePluginDataOfMainPlugin(this.project?.id)
        .pipe(takeUntil(this.unsubscribe)).subscribe(mainGamePlugin => {
      this.mainGamePlugin = mainGamePlugin;
    })
  }


}
