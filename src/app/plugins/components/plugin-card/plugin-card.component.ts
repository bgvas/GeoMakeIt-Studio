import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {GameService} from '../../../games/services/game.service';
import {Router} from '@angular/router';
import { Plugin } from '../../models/plugin';
import {PluginService} from '../../services/plugin.service';
import {Error} from '../../../classes/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.css']
})
export class PluginCardComponent implements OnInit, OnDestroy {

  @Input() plugin: any;
  @Input() type: string;

  @Output() delete = new EventEmitter();

  displayPlugin: Plugin;
  error: Error;
  private unsubscribe = new Subject<void>();

  constructor(private service: GameService, private router: Router, private pluginService: PluginService) { }

  ngOnInit(): void {
    if(this.plugin.id > 0){
      this.getPluginById(this.plugin.id);
    }
    this.getPluginById(this.plugin.plugin_id);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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
      this.pluginService.getPluginById(pluginId).pipe(takeUntil(this.unsubscribe)).subscribe(plugin => {
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
