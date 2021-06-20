import {Component, OnDestroy, OnInit, EventEmitter, Output} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PluginService} from '../../services/plugin.service';
import {Plugin} from '../../models/plugin';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';
import {Error} from '../../../classes/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';




@Component({
  selector: 'app-create-plugin',
  templateUrl: './create-plugin.component.html',
  styleUrls: ['./create-plugin.component.css']
})
export class CreatePluginComponent implements OnInit, OnDestroy {

  @Output() isCreatedPlugin = new EventEmitter<boolean>();
  createPluginForm: FormGroup;
  notification = new NotificationsComponent();
  private unsubscribe = new Subject<void>();

  constructor(private location: Location, private fb: FormBuilder, private service: PluginService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnDestroy() {
      this.unsubscribe.next();
      this.unsubscribe.complete();
  }

    initializeForm(): void {
    this.createPluginForm = this.fb.group({
      identifier: this.fb.control('',
          [Validators.required,
            Validators.minLength(3),
            Validators.maxLength(32),
            Validators.pattern('^[a-z]{1}[a-z0-9_]{2,31}$')]),
      title: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required)
    })
  }

  onSubmit() {
    if (this.createPluginForm.valid) {
      this.createNewPlugin(<Plugin>this.createPluginForm.value);
    }
  }

  createNewPlugin(newPlugin: Plugin): any {
    return this.service.postPlugin(newPlugin).pipe(takeUntil(this.unsubscribe)).subscribe((savePlugin: Plugin) => {
        this.notification.showNotification('Plugin, created successfully', 'success');
        this.isCreatedPlugin.emit(true);
    },
        (error: Error) => {
            if (error.code === 422){
                this.notification.showNotification('This plugin identifier, already exists', 'danger');
            } else {
                this.notification.showNotification('Can\'t create new plugin', 'danger');
            }
        })
  }


  onCancel() {
      this.createPluginForm.reset();
  }

  change(char: string): string {
      return char.toLowerCase();
  }
}
