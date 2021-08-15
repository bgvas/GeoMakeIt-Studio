import {Component, OnDestroy, OnInit} from '@angular/core';
import {PluginService} from '../../../plugins/services/plugin.service';
import {Plugin} from '../../../plugins/models/plugin';
import {Error} from '../../../classes/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-plugin-management',
  templateUrl: './plugin-management.component.html',
  styleUrls: ['./plugin-management.component.css']
})
export class PluginManagementComponent implements OnInit, OnDestroy {

  pluginsList: any;
  pluginsLoadSpinner: any;
  private unsubscribe = new Subject<void>();

  constructor(private pluginService: PluginService) { }

  ngOnInit(): void {
    this.pluginsLoadSpinner = true;
    this.loadAllPlugins();
  }

  ngOnDestroy() {
     this.unsubscribe.next();
     this.unsubscribe.complete();
  }

  loadAllPlugins() {
    this.pluginService.getAllPlugins().pipe(takeUntil(this.unsubscribe)).subscribe((allPlugins: Plugin[]) => {
          this.pluginsList = allPlugins['plugin'];
          this.pluginsLoadSpinner = false;
    },
        (error: Error) => {
          this.pluginsLoadSpinner = false;
            console.log('AdminAllPlugins: ' + error.message + error.code)
        })
  }

}
