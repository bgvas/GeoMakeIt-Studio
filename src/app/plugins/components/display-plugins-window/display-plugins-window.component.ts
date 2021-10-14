import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {PluginService} from '../../services/plugin.service';
import {PluginRelease} from '../../models/available_plugins/plugin-release';
import {Plugin} from '../../models/plugin';
import {GamePlugin} from '../../../gamePlugins/models/game-plugin';

@Component({
  selector: 'app-display-plugins-window',
  templateUrl: './display-plugins-window.component.html',
  styleUrls: ['./display-plugins-window.component.css']
})
export class DisplayPluginsWindowComponent implements OnInit, OnDestroy {

  @Output() removeGamePlugin = new EventEmitter<GamePlugin>();
  @Output() selectedGamePluginsArray = new EventEmitter<any>();
  @Input() titleOfWindow: string;
  @Input() pluginsArray: any[];
  @Input() isSelectedPlugins: boolean;
  selectedPluginReleasesArray = new Array<GamePlugin>();
  unsubscribe = new Subject<void>();

  constructor(private pluginService: PluginService) { }

  ngOnInit(): void {
    console.log(this.pluginsArray);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onRemovePlugin(gamePluginToRemove: GamePlugin) {
    /*const index = this.selectedPluginReleasesArray.indexOf(pluginToRemove);
    console.log(index);
    //this.selectedPluginReleasesArray = this.pluginService.temporary_save;
    this.selectedPluginReleasesArray.splice(index, 1);*/
    this.removeGamePlugin.emit(gamePluginToRemove)
  }

  onSelectPlugin(_selectedPluginRelease: GamePlugin) {
    if (!this.selectedPluginReleasesArray.includes(_selectedPluginRelease) &&
       this.selectedPluginReleasesArray.filter(e => e.plugin_id === _selectedPluginRelease.plugin_id).length === 0) {

      this.selectedPluginReleasesArray.push(_selectedPluginRelease);
      this.selectedGamePluginsArray.emit(_selectedPluginRelease);
      this.pluginService.temporary_save = this.selectedPluginReleasesArray;
    }

   /* if(!this.pluginsArray.includes())
    this.pluginsArray.push(_selectedPluginRelease);
    //}*/

  }

}
