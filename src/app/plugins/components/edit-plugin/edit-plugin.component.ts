import {Component, Input, OnInit} from '@angular/core';
import {PluginService} from '../../services/plugin.service';
import {Plugin} from '../../models/plugin';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {formatDate} from '@angular/common';
import {PluginRelease} from '../../models/available_plugins/plugin-release';

@Component({
  selector: 'app-edit-plugin',
  templateUrl: './edit-plugin.component.html',
  styleUrls: ['./edit-plugin.component.css']
})
export class EditPluginComponent implements OnInit {

  @Input() plugin: Plugin;
  pluginForm: FormGroup;
  pluginReleaseForm: FormGroup;
  latestPluginRelease: PluginRelease;
  firstRelease: boolean;
  edit: boolean;
  error = null;

  constructor(private service: PluginService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.getPluginRelease(this.plugin.id);
    this.initializePluginReleaseForm();
  }

  initializeForm() {
    this.pluginForm = this.fb.group({
      title: this.fb.control({value: this.plugin.title, disabled: true}, Validators.required),
      description: this.fb.control({value: this.plugin.description, disabled: true}, Validators.required)
    })
  }

  initializePluginReleaseForm() {
    this.pluginReleaseForm = this.fb.group({
      file: this.fb.control('')
    })
  }

  convertToReadableDate(dateStamp) {
    if ( dateStamp !== '') {
      const newDate =  new Date(dateStamp);
      return formatDate(newDate, 'dd/MM/yyyy', 'en-US');
    }
  }

  getPluginRelease(id) {
    this.service.getLatestReleaseOfPlugin(id).subscribe((data: PluginRelease) => {
      if (typeof data.id === 'undefined') {
        this.latestPluginRelease = new PluginRelease();
        this.latestPluginRelease.name = 'Upload first version';
        this.firstRelease = true;
      }
    },
        (error => console.log('Error received: ' + error)))
  }

  activateEdit() {
    this.edit = true;
    this.pluginForm.get('title').enable();
    this.pluginForm.get('description').enable();
  }


  uploadRelease(file: any) {
   const fileName = file.target.files[0];
   if (fileName.name.split('.', 2)[1] !== 'aar') {
     this.error = 'Error type of file. Only *.aar files are accepted';
     this.pluginReleaseForm.reset();
   } else {
     this.error = null;
   }
  }
}
