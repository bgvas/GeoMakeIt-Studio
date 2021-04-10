import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotificationsComponent} from '../../../features/components/notifications/notifications.component';
import {Plugin} from '../../models/plugin';
import {PluginService} from '../../services/plugin.service';
import {Error} from '../../../classes/error/error';
import {PluginRelease} from '../../models/available_plugins/plugin-release';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';



@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.css']
})
export class PluginsComponent implements OnInit, OnDestroy {


  notification = new NotificationsComponent();
  delete: any;
  setSpinnerActive: boolean;
  error: Error = null;
  deletePlugin: any;
  pluginReleasesMap = new Map<Plugin, PluginRelease[]>();
  withOutPlugins: boolean;
  private unsubscribe = new Subject<void>();

  constructor(private service: PluginService, private router: Router) { }

  ngOnInit(): void {
      this.setSpinnerActive = true;
      this.loadListOfPlugins();
  }

  // stop observable stream//
  ngOnDestroy() {
      this.unsubscribe.next();
      this.unsubscribe.complete();
  }

  onDelete(data): void {
      if (data) {
          this.service.deletePluginById(this.service.object.id).pipe(takeUntil(this.unsubscribe)).subscribe(value => {
              this.pluginReleasesMap.clear();
              this.loadListOfPlugins();
              this.notification.showNotification('Plugin Deleted!', 'success');
          },
              (error: Error) => {
                    this.notification.showNotification('Can\'t delete Plugin!', 'danger');
                    console.log('Delete plugin: ' + error.message + ' - ' + error.code);
          })
      }
  }

  loadListOfPlugins() {
      this.service.getAllPluginsOfUser().pipe(takeUntil(this.unsubscribe)).subscribe(plugins => {
          this.setSpinnerActive = false;
          if (plugins.data.length > 0) {
              for (const plugin of plugins.data) {
                  this.service.getReleasesOfPlugin(plugin.id).pipe(takeUntil(this.unsubscribe)).subscribe(releases => {
                        this.pluginReleasesMap.set(plugin, releases.data);
                  },
                  (error: Error) => {
                      console.log('Releases of plugin: ' + error.message + ' - ' + error.code)
                      this.error = error;
                  })
              }
              this.withOutPlugins = false;
          } else {
              this.withOutPlugins = true;
          }
      },
      (error: Error) => {
          console.log('List of plugins: ' + error.message + ' - ' + error.code)
          this.setSpinnerActive = false;
          this.error = error;
      });
  }

  rememberPlugin(plugin) {
    this.service.object = plugin;
    this.deletePlugin = this.service.object;
  }

  getMapKeys(): Plugin[] {
    return  Array.from(this.pluginReleasesMap?.keys());
  }

  uploadRelease(plugin) {
      this.service.object = plugin;
      this.router.navigate(['plugins/edit']);
  }

}
