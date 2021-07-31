import { Component, OnInit } from '@angular/core';
import {PluginService} from '../../../plugins/services/plugin.service';
import {Plugin} from '../../../plugins/models/plugin';
import {Error} from '../../../classes/error/error';

@Component({
  selector: 'app-plugin-management',
  templateUrl: './plugin-management.component.html',
  styleUrls: ['./plugin-management.component.css']
})
export class PluginManagementComponent implements OnInit {

  pluginsList: any;
  pluginsLoadSpinner: any;

  constructor(private pluginService: PluginService) { }

  ngOnInit(): void {
    this.pluginsLoadSpinner = true;
    this.loadAllPlugins();
  }

  loadAllPlugins() {
    this.pluginService.getAllPlugins().subscribe((allPlugins: Plugin[]) => {
          this.pluginsList = allPlugins['plugin'];
          this.pluginsLoadSpinner = false;
    },
        (error: Error) => {
          this.pluginsLoadSpinner = false;
            console.log('AdminAllPlugins: ' + error.message + error.code)
        })
  }

}
