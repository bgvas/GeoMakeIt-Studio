import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameService} from '../../games/game.service';
import {Router} from '@angular/router';
import { Plugin } from '../../classes/plugins/plugin';
import {PluginService} from '../plugin.service';
import {Error} from '../../classes/error/error';


@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.css']
})
export class PluginCardComponent implements OnInit {

  @Input() plugin: any;
  @Input() type: string;

  @Output() delete = new EventEmitter();

  displayPlugin: Plugin;
  error: Error;

  constructor(private service: GameService, private router: Router, private pluginService: PluginService) { }

  ngOnInit(): void {
    if(this.plugin.id > 0){
      this.getPluginById(this.plugin.id);
    }
    this.getPluginById(this.plugin.plugin_id);
  }

  // return true if delete-button clicked //
  onDeletePlugin(event, plugin){
    const events = [];
    events.push(event);
    events.push(plugin);
    this.delete.emit(events);
  }

  goToPluginConfigurations(): void {
    this.service.object = {
      plugin: this.plugin,
      game: this.service.object
    }
    this.router.navigate(['/games/plugins/config']);
  }

  getPluginById(pluginId) {
    if(this.plugin?.identifier === undefined) {
      this.pluginService.getPluginById(pluginId).subscribe(plugin => {
        /*this.displayPlugin = plugin.data;*/
      },
          (error: Error) => {
       this.error = error;
        console.log('Plugin card: ' + error.message + ' - ' + error.code);
      })
    } else {
      this.displayPlugin = this.plugin;
    }
  }

  rememberPlugin(plugin) {
    this.service.object = plugin;
  }



}
