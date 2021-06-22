import {Component, Input, OnInit} from '@angular/core';
import {PluginService} from '../../services/plugin.service';
import {Plugin} from '../../models/plugin';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-edit-plugin',
  templateUrl: './edit-plugin.component.html',
  styleUrls: ['./edit-plugin.component.css']
})
export class EditPluginComponent implements OnInit {

  @Input() plugin: Plugin;
  pluginForm: FormGroup;
  edit: boolean;

  constructor(private service: PluginService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.pluginForm = this.fb.group({
      title: this.fb.control({value: '', disabled: true}, Validators.required),
      description: this.fb.control({value: '', disabled: true}, Validators.required)
    })

    this.pluginForm.get('title').setValue(this.plugin.title);
    this.pluginForm.get('description').setValue(this.plugin.description);

  }

  convertToReadableDate(dateStamp) {
    if ( dateStamp !== '') {
      const newDate =  new Date(dateStamp);
      return formatDate(newDate, 'dd/MM/yyyy', 'en-US');
    }
  }

  activateEdit() {
    this.edit = true;
    this.pluginForm.get('title').enable();
    this.pluginForm.get('description').enable();
  }

  onCancel() {
    this.pluginForm.reset();
  }
}
