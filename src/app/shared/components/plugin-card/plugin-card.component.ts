import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NotificationsComponent} from '../notifications/notifications.component';
import {Subject} from 'rxjs';
import {GameService} from '../../../games/services/game.service';
import {FeaturesService} from '../../services/features.service';
import {Router} from '@angular/router';
import {PluginService} from '../../../plugins/services/plugin.service';
import {takeUntil} from 'rxjs/operators';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.css']
})
export class PluginCardComponent implements OnInit, OnDestroy {

  @Input() plugin: any;
  @Output() deleted = new EventEmitter();
  deletePlugin: any;
  notification = new NotificationsComponent();
  private unsubscribe = new Subject<void>();

  constructor(private service: PluginService, private featureService: FeaturesService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onDelete(plugin) {
    if (plugin) {
      this.deletePlugin = this.featureService.plugin;
      this.service.deletePluginById(this.deletePlugin?.id).pipe(takeUntil(this.unsubscribe)).subscribe(pluginDeleted => {
            this.deleted.emit(true);
            this.notification.showNotification('Plugin deleted!', 'success');
          },
          error => {
            console.log('Deleting plugin: ' + error.code + ' - ' + error.message);
            this.notification.showNotification('Can\'t delete plugin. Something went wrong!', 'danger');
          })
    }
  }

  pluginToDelete(pluginToDelete) {
    this.featureService.plugin = pluginToDelete;
  }

  convertToReadableDate(date) {
    if ( date !== '') {
      const newDate =  new Date(date);
      return formatDate(newDate, 'dd/MM/yyyy', 'en-US');
    }
  }

  onClick(plugin) {
    sessionStorage.setItem('plugin', JSON.stringify(this.plugin));
    this.router.navigate(['plugins/setup']);
  }

}
