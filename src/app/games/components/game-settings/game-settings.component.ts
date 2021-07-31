import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Game} from '../../models/games/game';
import {PluginService} from '../../../plugins/services/plugin.service';
import {Plugin} from '../../../plugins/models/plugin';
import {Error} from '../../../classes/error/error';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SelectedPlugin} from '../../../plugins/models/selectedPlugin/selected-plugin';
import {GameService} from '../../services/game.service';
import {InstallPlugins} from '../../models/installPlugins/install-plugins';
import {projectElements} from '../../models/projectElements/project-elements';
import {Subscription} from 'rxjs/Subscription';


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
  selectedPlugins = new Array<Plugin>();
  pluginsForProject = new Array<InstallPlugins>();
  private submitEvent: Subscription;


  constructor(private pluginService: PluginService, private fb: FormBuilder, private projectService: GameService) { }

  ngOnInit(): void {

    this.logo = '/assets/img/logo-icon.png';
    this.pluginService.getAllPlugins().pipe(takeUntil(this.unsubscribe)).subscribe(plugins => {
          this.availablePlugins = plugins;
        },
        (e: Error) => {
          this.error = e;
          console.log('Game settings(Available plugins): ' + e.message + ' - ' + e.code);
        })
    this.initializeProjectForm();

    // when submit comes from stepper-wizard //
    this.submitEvent = this.submitFromStepper?.subscribe(submit => {
        this.onSubmit();
    })

  }

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


  onCheck(event, plugin) {

    if (event.target.checked) {
      this.selectedPlugins.push(plugin);
      const addPlugin = new SelectedPlugin();
      addPlugin.game_id = this.project.id;
      addPlugin.plugin_id = plugin.id;
      addPlugin.plugin_release_id = 42;
      addPlugin.enabled = true;

      this.pluginsForProject.push(addPlugin);
    }
    if (!event.target.checked) {
      this.selectedPlugins.splice(this.selectedPlugins.indexOf(plugin), 1);
      this.pluginsForProject.splice(this.selectedPlugins.indexOf(plugin), 1);
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

  onSelect(event) {
    console.log(event.target.value);
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
    for (const plugin of this.pluginsForProject) {
      const newSelectedPlugin = {
          plugin_release_id: plugin.plugin_release_id,
          enabled: true
      }
      this.postPluginToProject(newSelectedPlugin);
    }
  }

  postPluginToProject(plugin: InstallPlugins) {
    this.projectService.postPluginToProject(this.project.id, plugin).subscribe(installPlugin => {
      },
        (e: Error) => {
          console.log('Install plugin to game: ' + e.message + ' - ' + e.code);
        }
    )
  }



}
