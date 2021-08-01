import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PluginService} from '../../services/plugin.service';
import {Plugin} from '../../models/plugin';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {formatDate} from '@angular/common';
import {PluginRelease} from '../../models/available_plugins/plugin-release';
import {Error} from '../../../classes/error/error';
import {AppService} from '../../../app.service';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';

@Component({
  selector: 'app-edit-plugin',
  templateUrl: './edit-plugin.component.html',
  styleUrls: ['./edit-plugin.component.css']
})
export class EditPluginComponent implements OnInit {

  @Input() plugin: Plugin;
  @Output() updated = new EventEmitter();
  pluginForm: FormGroup;
  pluginReleaseForm: FormGroup;
  latestPluginRelease: PluginRelease;
  firstRelease: boolean;
  edit: boolean;
  error = null;
  file: any;
  notification = new NotificationsComponent();

  constructor(private pluginService: PluginService, private fb: FormBuilder, private appService: AppService) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.getPluginRelease(this.plugin.id);
    this.initializePluginReleaseForm();
  }

  initializeForm() {
    this.pluginForm = this.fb.group({
      title: this.fb.control({value: this.plugin.title, disabled: true}, Validators.required),
      description: this.fb.control({value: this.plugin.description, disabled: true}, Validators.required),
      short_description: this.fb.control({value: this.plugin.short_description, disabled: true}, Validators.required),
      user_id: this.fb.control(this.appService.GetCurrentUser().id),
      plugin_source: this.fb.control('')
    })
  }

  initializePluginReleaseForm() {
    this.pluginReleaseForm = this.fb.group({
      file: this.fb.control(''),
      plugin_id: this.fb.control(this.plugin.id)
    })
  }

  submitUpdate() {
    const pluginToUpdate = [];
    if(this.pluginForm.valid && this.pluginReleaseForm.valid) {
      pluginToUpdate.push(this.pluginForm.value);
      if(this.pluginReleaseForm.get('file') !== null) {
          pluginToUpdate[0]['plugin_source'] = this.file?.name;
          pluginToUpdate.push(this.file)
      }
    }
    this.pluginService.updatePluginById(this.plugin.id, pluginToUpdate).subscribe(updatedPlugin => {
      this.notification.showNotification('Plugin, updated successfully', 'success');
      this.updated.emit(true);
    },
        (error: Error) => {
          console.log('Error in plugin update: ' + error.message + ' - ' + error.code);
          this.notification.showNotification('Can\'t update plugin', 'danger');
        })
  }

  getPluginRelease(id) {
    /*this.service.getLatestReleaseOfPlugin(id).subscribe((data: PluginRelease) => {
      if (typeof data.id === 'undefined') {
        this.latestPluginRelease = new PluginRelease();
        this.latestPluginRelease.name = 'Upload first version';
        this.firstRelease = true;
      }
    },
        (error: Error) => {
      console.log('Error received: ' + error.code + ' - ' + error.displayed_message)
        })*/
  }

  // when plugin-edit button clicked, set fields as enabled //
  activateEdit() {
    this.edit = true;
    this.pluginForm.get('title').enable();
    this.pluginForm.get('description').enable();
    this.pluginForm.get('short_description').enable();
  }


  uploadRelease(event: any) {
   const file = event.target.files[0];
   if (file.name.split('.', 2)[1] !== 'zip') {
     this.error = 'Error type of file. Only *.zip files are accepted';
     this.pluginReleaseForm.reset();
   } else {
     this.file = file;
   }
  }
}
