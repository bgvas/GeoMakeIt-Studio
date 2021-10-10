import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';
import {Plugin} from '../../models/plugin';
import {PluginService} from '../../services/plugin.service';
import {Error} from '../../../error-handling/error/error';
import {PluginRelease} from '../../models/available_plugins/plugin-release';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AppService} from '../../../app.service';



@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.css']
})
export class PluginsComponent implements OnInit, OnDestroy {


  notification = new NotificationsComponent();
  delete: any;
  showSpinner: boolean;
  error: Error = null;
  deletePlugin: any;
  pluginReleasesMap = new Map<Plugin, PluginRelease[]>();
  withOutPlugins: boolean;
  private unsubscribe = new Subject<void>();

  constructor(private service: PluginService, private router: Router, private appService: AppService) { }

  ngOnInit(): void {
      this.showSpinner = true;
      this.loadListOfPlugins();
  }

  // stop observable stream//
  ngOnDestroy() {
      this.unsubscribe.next();
      this.unsubscribe.complete();
  }

  onDelete(data): void {
      if (data) {
          this.service.deletePluginById(this.service.plugin.id).pipe(takeUntil(this.unsubscribe)).subscribe(value => {
              this.pluginReleasesMap.clear();
              this.loadListOfPlugins();
              this.notification.display('Plugin Deleted!', 'success');
          },
              (error: Error) => {
                    this.notification.display('Can\'t delete Plugin!', 'danger');
                    console.log('Delete plugin: ' + error.message + ' - ' + error.code);
          })
      }
  }

  loadListOfPlugins() {
      this.service.getAllPluginsOfUser(this.appService.currentUser().id).pipe(takeUntil(this.unsubscribe)).subscribe(projects => {
          this.showSpinner = false;
          if (projects['plugins'].length > 0) {
              for (const plugin of projects['plugins']) {
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
          this.showSpinner = false;
          this.error = error;
      });
  }

  rememberPlugin(plugin) {
    this.service.plugin = plugin;
    this.deletePlugin = this.service.plugin;
  }

  getMapKeys(): Plugin[] {
    return  Array.from(this.pluginReleasesMap?.keys());
  }

  uploadRelease(plugin) {
      this.service.plugin = plugin;
      this.router.navigate(['plugins/edit']);
  }

    backgroundColor(index: number): string {
        if (index % 2 === 0) {
            return 'bg-light';
        } else {
            return 'bg-white';
        }
    }

}
