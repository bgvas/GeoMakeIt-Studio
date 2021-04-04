import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {Location} from '@angular/common';
import {PluginService} from '../plugin.service';
import {Plugin} from '../../classes/plugins/plugin';
import {PluginRelease} from '../../classes/plugins/available_plugins/plugin-release';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {Error} from '../../classes/error/error';


@Component({
  selector: 'app-edit-plugin',
  templateUrl: './edit-plugin.component.html',
  styleUrls: ['./edit-plugin.component.css']
})
export class EditPluginComponent implements OnInit {

  plugin: Plugin;
  releases: PluginRelease[];
  fileUploadForm: FormGroup;
  fileName = '';
  notification = new NotificationsComponent();


  constructor(
      private router: Router,
      private location: Location,
      private service: PluginService,
      private fb: FormBuilder) { }

  ngOnInit(): void {
    this.plugin = this.service.object;
    this.initializeForm();
}


  onCancel(): void {
    this.location.back();
  }

  initializeForm() {
      this.fileUploadForm = this.fb.group({
          name: this.fb.control('', Validators.required),
          file: this.fb.control('', Validators.required)
      })
  }

  onSubmit() {
      const release = new FormData();
      release.append('name', this.fileUploadForm.get('name').value);
      release.append('file', this.fileUploadForm.get('file').value);
      this.service.postReleaseForPlugin(this.plugin.id, release).subscribe(result => {
          this.notification.showNotification('Plugin uploaded successfully. Will be visible after approval.', 'success');
          this.router.navigate(['plugins']);
      },
      (error: Error) => {
            console.log('New Release: ' + error.message + ' - ' + error.code);
            this.notification.showNotification('Plugin didn\'t created', 'danger');
      })
  }

  onSelect(event){
      if(event.target.files.length > 0) {
          const file = event.target.files[0];
          this.fileUploadForm.get('file').setValue(file);
      }
  }

}
