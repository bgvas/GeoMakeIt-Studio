import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {PluginService} from '../../services/plugin.service';
import {PluginRelease} from '../../models/available_plugins/plugin-release';
import {Plugin} from '../../models/plugin';

@Component({
  selector: 'app-display-plugins-window',
  templateUrl: './display-plugins-window.component.html',
  styleUrls: ['./display-plugins-window.component.css']
})
export class DisplayPluginsWindowComponent implements OnInit, OnDestroy {


  @Output() selectedPluginsList =  new EventEmitter<PluginRelease[]>();
  @Input() titleOfWindow: string;
  @Input() pluginsArray: Plugin[];
  @Input() isSelectedPlugins: boolean;
  selectedPluginReleasesArray = new Array<PluginRelease>();
  unsubscribe = new Subject<void>();

  constructor(private pluginService: PluginService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onRemovePlugin(pluginToRemove) {
    const index = this.selectedPluginReleasesArray.indexOf(pluginToRemove);
    this.selectedPluginReleasesArray = this.pluginService.temporary_save;
    this.selectedPluginReleasesArray.splice(index, 1);
  }

  onSelectPlugin(selectedPlugin) {
    if (!this.selectedPluginReleasesArray.includes(selectedPlugin) &&
       this.selectedPluginReleasesArray.filter(e => e.plugin_id === selectedPlugin.plugin_id).length === 0) {
       this.selectedPluginReleasesArray.push(selectedPlugin);
      this.selectedPluginsList.emit(this.selectedPluginReleasesArray);
    }
    this.pluginService.temporary_save = this.selectedPluginReleasesArray;
  }

}
