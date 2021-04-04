import {Component, OnInit} from '@angular/core';
import {AvailablePluginsService} from './availbable-plugins/available-plugins.service';
import {InstalledPluginsService} from './instaled-plugins-of-a-game/installed-plugins.service';
import {Router} from '@angular/router';
import {GameService} from '../game.service';
import {Plugin} from '../../classes/plugins/plugin';
import {Error} from '../../classes/error/error';
import {InstalledPlugin} from '../../classes/plugins/installed_plugins/installed-plugin';
import {PluginService} from '../../plugins/plugin.service';

@Component({
  selector: 'app-plugins-for-games',
  templateUrl: './plugins-for-games.component.html',
  styleUrls: ['./plugins-for-games.component.css']
})
export class PluginsForGamesComponent implements OnInit {

  availablePlugins: Plugin[];
  installedPlugins: InstalledPlugin[];
  game: any;
  error: Error;


  constructor(private pluginService: PluginService,
              private installedService: InstalledPluginsService,
              private router: Router, private gameService: GameService) { }

  ngOnInit(): void {

    // get saved-game from service //
    this.game = this.gameService.object;


    // if there are no game, return to games-list
    if (this.game?.id === undefined) {
      this.router.navigate(['games']);
    }

    // get installed plugins of a game //
    this.gameService.getInstalledPluginsOfGame(this.game?.id).subscribe((plugins) => {
      this.installedPlugins = plugins.data;
    },
    (error: Error) => {
       this.error = error;
       console.log('Installed plugins of game: ' + this.error.message + ' - ' + this.error.code);
    })

    this.pluginService.getAvailablePlugins().subscribe(data => {
      this.availablePlugins = data.data;
    });

   /* this.installedService.getInstalledPluginsPerGame(this.game?.id).subscribe(data => {
      this.installedPlugins = data;
    });*/
  }





}
