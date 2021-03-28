import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PluginService} from '../plugin.service';
import {Plugin} from '../../classes/plugins/plugin';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {Error} from '../../classes/error/error';

@Component({
  selector: 'app-create-plugin',
  templateUrl: './create-plugin.component.html',
  styleUrls: ['./create-plugin.component.css']
})
export class CreatePluginComponent implements OnInit {

  createPluginForm: FormGroup;
  notification = new NotificationsComponent();

  constructor(private location: Location, private fb: FormBuilder, private service: PluginService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.createPluginForm = this.fb.group({
      identifier: this.fb.control('',
          [Validators.required,
            Validators.minLength(3),
            Validators.maxLength(32),
            Validators.pattern('^[a-z]{1}[a-z0-9_]{2,31}$')]),
      title: this.fb.control('', Validators.required),
      description: this.fb.control('')
    })
  }

  onSubmit(){
    if(this.createPluginForm.valid) {
      this.createNewPlugin(<Plugin>this.createPluginForm.value);
    }
  }

  createNewPlugin(newPlugin: Plugin): any {
    return this.service.postPlugin(newPlugin).subscribe((savePlugin: Plugin) => {
        this.notification.showNotification('Plugin ' + newPlugin.identifier  + ', created successful', 'success');
        this.location.back();
    },
        (error: Error) => {
          this.notification.showNotification('Can\'t create new plugin', 'danger');
          this.location.back();
        })
  }


  onCancel(): void {
    this.location.back();
  }

  change(char: string): string {
      return char.toLowerCase();
  }
}
