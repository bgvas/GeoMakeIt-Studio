import {Component, OnInit} from '@angular/core';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {Plugin} from '../../classes/plugins/plugin';
import {PluginService} from '../plugin.service';
import {Error} from '../../classes/error/error';
import {PluginRelease} from '../../classes/plugins/available_plugins/plugin-release';
import {Router} from '@angular/router';


@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.css']
})
export class PluginsComponent implements OnInit{


  notification = new NotificationsComponent();
  delete: any;
  setSpinnerActive: boolean;
  error: Error = null;
  deletePlugin: any;
  pluginReleasesMap = new Map<Plugin, PluginRelease[]>();

  constructor(private service: PluginService, private router: Router) { }

  ngOnInit(): void {
      this.setSpinnerActive = true;
      this.loadListOfPlugins();
  }

  onDelete(data): void {
    if (data) {
      this.service.deletePluginById(this.service.object.id).subscribe(value => {
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
      this.service.getAllPluginsOfUser().subscribe(plugins => {
          this.setSpinnerActive = false;
          for (const plugin of plugins.data) {
              this.service.getReleasesOfPlugin(plugin.id).subscribe(releases => {
                  this.pluginReleasesMap.set(plugin, releases.data);
              },
              (error: Error) => {
                  console.log('Releases of plugin: ' + error.message + ' - ' + error.code)
                  this.error = error;
              })
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
    return Array.from(this.pluginReleasesMap.keys());
  }

  uploadRelease(plugin) {
      this.service.object = plugin;
      this.router.navigate(['plugins/edit']);
  }

}
