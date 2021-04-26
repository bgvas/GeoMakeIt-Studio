import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../models/games/game';
import {PluginService} from '../../../plugins/services/plugin.service';
import {Plugin} from '../../../plugins/models/plugin';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})
export class GameSettingsComponent implements OnInit {

  @Input() project: Game;

  availablePlugins: Plugin[];
  logo: any;

  constructor(private pluginService: PluginService) { }

  ngOnInit(): void {
    this.logo = '/assets/img/logo-icon.png';
    this.pluginService.getAvailablePlugins().subscribe(plugins => {
      this.availablePlugins = plugins.data;
    })
  }

  // if a logo selected, display it //
  onFileChange(event) {
    if ( event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.logo = reader.result;
      }
    }
  }

}
