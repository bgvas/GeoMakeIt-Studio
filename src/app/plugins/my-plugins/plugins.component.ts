import { Component, OnInit } from '@angular/core';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {Plugin} from '../../classes/plugins/plugin';
import {PluginService} from '../plugin.service';
import {Error} from '../../classes/error/error';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.css']
})
export class PluginsComponent implements OnInit {

  listOfPlugins: Plugin[];
  notification = new NotificationsComponent();
  delete: any;
  setSpinnerActive: boolean;
  error: Error = null;
  deletePlugin: any;

  constructor(private service: PluginService) { }

  ngOnInit(): void {
      this.setSpinnerActive = true;
      this.loadListOfPlugins();
  }

  onDelete(data): void {
    const pluginId = this.service.object.id;
    if (data) {
      this.service.deletePluginById(pluginId).subscribe((data: Plugin) => {
        this.notification.showNotification('Plugin Deleted!', 'success');
        this.loadListOfPlugins();
      },
      (error: Error) => {
        this.notification.showNotification('Can\'t delete Plugin!', 'danger');
        console.log('Delete plugin: ' + error.message + ' - ' + error.code);
      })

    }
  }

  loadListOfPlugins() {
    this.service.getAllPluginsOfUser().subscribe(data => {
      this.listOfPlugins = data.data;
      this.setSpinnerActive = false;
    },
        (error: Error) => {
        console.log('List of plugins: ' + error.message + ' - ' + error.code)
        this.setSpinnerActive = false;
        this.error = error;
    });
  }

  rememberPlugin(plugin){
    this.service.object = plugin;
    this.deletePlugin = this.service.object;
  }

}
