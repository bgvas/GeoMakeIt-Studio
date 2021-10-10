import {Component, OnDestroy, OnInit, EventEmitter, Output} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PluginService} from '../../services/plugin.service';
import {Plugin} from '../../models/plugin';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';
import {Error} from '../../../error-handling/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AppService} from '../../../app.service';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';




@Component({
  selector: 'app-create-plugin',
  templateUrl: './create-plugin.component.html',
  styleUrls: ['./create-plugin.component.css']
})
export class CreatePluginComponent implements OnInit, OnDestroy {

  @Output() isCreatedPlugin = new EventEmitter<boolean>();
  createPluginForm?: FormGroup;
  notification = new NotificationsComponent();
  private unsubscribe = new Subject<void>();

  constructor(private location: Location, private fb: FormBuilder, private service: PluginService, private appService: AppService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.createPluginForm.reset();
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
      user_id: this.fb.control(this.appService.currentUser()?.id),
      slogan: this.fb.control(''),
      description: this.fb.control('')
    })
  }

  onSubmit() {
    if (this.createPluginForm.valid) {
      this.createNewPlugin(this.createPluginForm.value);
    }
  }

  createNewPlugin(plugin): any {
    return this.service.createNewPlugin(plugin).pipe(takeUntil(this.unsubscribe)).subscribe(savedPlugin => {
        this.notification.display(savedPlugin.message, 'success');
        this.isCreatedPlugin.emit(true);
        this.createPluginForm.reset();
    },
        (error: ErrorResponseModel) => {
        console.log(error.message + ' - ' + error.errors);
            this.notification.display('Can\'t create new plugin', 'danger');
        })
  }


  onCancel() {
      this.createPluginForm.reset();
  }

  change(char: string): string {
      return char.toLowerCase();
  }
}
