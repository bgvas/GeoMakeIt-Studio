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
import {typeCheckFilePath} from '@angular/compiler-cli/src/ngtsc/typecheck';



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
  error: Error;
  selectedPlugins: any;
  pluginsForProject = new Array<SelectedPlugin>();
  private submitEvent: Subscription;


  constructor(private pluginService: PluginService, private fb: FormBuilder, private projectService: GameService) { }

  ngOnInit(): void {
    this.projectService.getInstalledPluginsOfGame(this.project.id).subscribe(plugins => {  // get installed plugins from dataBase //
      this.selectedPlugins = plugins.filter(e => e['id'] !== 1);  // except the basic plugin //
    },
        (e: Error) => {
          this.error = e;
          console.log('Plugins of game: ' + e.message + ' - ' + e.code)
        })
    this.error = null;
    this.logo = '/assets/img/logo-icon.png'; // default logo for new project //
    this.pluginService.getAllPlugins().pipe(takeUntil(this.unsubscribe)).subscribe(projects => {
      this.availablePlugins = projects['plugin'].filter((e: Plugin) => e.id !== 1); // display all available plugins except basic Plugin//
        },
        (e: Error) => {
          this.error = e;
          console.log('Game settings(Available plugins): ' + e.message + ' - ' + e.code);
        })
    this.initializeProjectForm();
    // when submit comes from stepper-wizard //
    if (typeof this.submitFromStepper !== 'undefined') {
      this.submitEvent = this.submitFromStepper?.subscribe(submit => {
        this.onSubmit();
      })
    }
  }

  // on exit, unsubscribe //
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

  onAddPlugin(plugin) {
    if (typeof plugin !== 'undefined') {
      if (this.selectedPlugins.includes(plugin)) {
        console.log('Plugin Exists in game configuration');
      } else {
          this.selectedPlugins.push(plugin);
          const addPlugin = new SelectedPlugin();
          addPlugin.game_id = this.project?.id;
          addPlugin.plugin_id = plugin?.id;
          addPlugin.enabled = true;
          this.addPluginToProject(addPlugin);
      }
    }
  }

  onRemovePlugin(plugin) {
      if (typeof plugin !== 'undefined') {
        if (this.selectedPlugins.includes(plugin)) {
          this.selectedPlugins.splice(this.selectedPlugins.indexOf(plugin), 1);
          this.projectService.deleteInstalledPluginFromGame(this.project.id, plugin.id).subscribe(deletePlugin => {
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
      description: this.fb.control('', Validators.required)
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
      this.projectService.updateGame(this.project.id, projectToUpdate).subscribe(update => {
        console.log(update);
      },
          (e: Error) => {
            console.log('Update elements of project: ' + e.message + ' - ' + e.code);
          });
    }
  }

  addPluginToProject(installedPlugin: SelectedPlugin) {
       this.projectService.addPluginToProject(installedPlugin).subscribe(installPlugin => {
              console.log(installPlugin);
           },
           (e: Error) => {
             console.log('Install plugin to game: ' + e.message + ' - ' + e.code);
           }
       )
  }

}
