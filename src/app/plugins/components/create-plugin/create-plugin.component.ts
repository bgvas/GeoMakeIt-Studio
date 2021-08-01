import {Component, OnDestroy, OnInit, EventEmitter, Output} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PluginService} from '../../services/plugin.service';
import {Plugin} from '../../models/plugin';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';
import {Error} from '../../../classes/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AppService} from '../../../app.service';




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

  constructor(private location: Location, private fb: FormBuilder, private service: PluginService, private appService: AppService) { }

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
      user_id: this.fb.control(this.appService.GetCurrentUser().id),
      short_description: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required)
    })
  }

  onSubmit() {
    if (this.createPluginForm.valid) {
      this.createNewPlugin(this.createPluginForm.value);
    }
  }

  createNewPlugin(plugin): any {
    return this.service.addNewPlugin(plugin).pipe(takeUntil(this.unsubscribe)).subscribe((savedPlugin) => {
        this.notification.showNotification('Plugin, created successfully', 'success');
        this.isCreatedPlugin.emit(true);
    },
        (error: Error) => {
        console.log('Plugin creation error: ' + error.message + ' - ' + error.code);
            this.notification.showNotification('Can\'t create new plugin', 'danger');
        })
  }


  onCancel() {
      this.createPluginForm.reset();
  }

  change(char: string): string {
      return char.toLowerCase();
  }
}
