import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Game} from '../../models/games/game';
import {PluginService} from '../../../plugins/services/plugin.service';
import {Plugin} from '../../../plugins/models/plugin';
import {Error} from '../../../classes/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})
export class GameSettingsComponent implements OnInit, OnDestroy  {

  @Input() project: Game;
  availablePlugins: Plugin[];
  logo: any;
  pluginForm: FormGroup;
  unsubscribe = new Subject<void>();
  error: Error;
  selectedPlugins = new Array<Plugin>();

  constructor(private pluginService: PluginService, private fb: FormBuilder) { }

  ngOnInit(): void {


    this.logo = '/assets/img/logo-icon.png';
    this.pluginService.getAvailablePlugins().pipe(takeUntil(this.unsubscribe)).subscribe(plugins => {
          this.availablePlugins = plugins.data;
        },
        (e: Error) => {
          this.error = e;
          console.log('Game settings(Available plugins): ' + e.message + ' - ' + e.code);
        })
    this.initializeForm();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // if select a logo, display it //
  onFileChange(event) {
    if ( event.target.files.length > 0 && event.target.files[0].type.includes('image/')) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.logo = reader.result;
      }
    }
  }

  get pluginsToUse() {
    return this.pluginForm.get('pluginsToUse') as FormArray;
  }

  set pluginsToUse(plugin: any)  {
    (this.pluginForm.get('pluginsToUse') as FormArray).push(plugin);
  }


  onCheck(event, plugin) {

    if (event.target.checked) {
      this.selectedPlugins.push(plugin);
      this.pluginsToUse.push(plugin.title);
    }
    if (!event.target.checked) {
      this.selectedPlugins.splice(this.selectedPlugins.indexOf(plugin), 1);
    }
    console.log(this.selectedPlugins);
  }

  initializeForm() {
    this.pluginForm = this.fb.group({
      title: this.fb.control(''),
      description: this.fb.control(''),
      pluginsToUse: this.fb.array([
        this.fb.control('')
      ])
    })
    this.setValuesToForm();
  }

  setValuesToForm() {
    this.pluginForm.get('title').setValue(this.project.title);
    this.pluginForm.get('description').setValue(this.project.description);
  }




  onSubmit() {
    console.log(this.pluginForm.value);
  }

}
