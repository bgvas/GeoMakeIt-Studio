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
  imageAddress: File;

  constructor(private pluginService: PluginService) { }

  ngOnInit(): void {

    this.pluginService.getAvailablePlugins().subscribe(plugins => {
      this.availablePlugins = plugins.data;
    })
  }

  getImage(event) {
    console.log(event.target.files[0]);
  }

}
