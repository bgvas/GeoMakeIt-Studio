import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Game} from '../../models/games/game';
import {PluginService} from '../../../plugins/services/plugin.service';
import {Plugin} from '../../../plugins/models/plugin';
import {Error} from '../../../classes/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})
export class GameSettingsComponent implements OnInit, OnDestroy {

  @Input() project: Game;
  availablePlugins: Plugin[];
  logo: any;
  unsubscribe = new Subject<void>();
  error: Error;

  constructor(private pluginService: PluginService) { }

  ngOnInit(): void {
    this.logo = '/assets/img/logo-icon.png';
    this.pluginService.getAvailablePlugins().pipe(takeUntil(this.unsubscribe)).subscribe(plugins => {
      this.availablePlugins = plugins.data;
    },
        (e: Error) => {
            this.error = e;
            console.log('Game settings(Available plugins): ' + e.message + ' - ' + e.code);
        })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // if select a logo, display it //
  onFileChange(event) {
    if ( event.target.files.length > 0 && event.target.files[0].type.includes('image/')) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.logo = reader.result;
      }
    }
  }

}
