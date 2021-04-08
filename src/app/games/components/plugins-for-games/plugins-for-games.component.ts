import {Component, OnInit} from '@angular/core';
import {InstalledPluginsService} from '../../services/instaled-plugins-of-a-game/installed-plugins.service';
import {Router} from '@angular/router';
import {GameService} from '../../services/game.service';
import {Plugin} from '../../../plugins/models/plugin';
import {Error} from '../../../classes/error/error';
import {InstalledPlugin} from '../../../plugins/models/installed_plugins/installed-plugin';
import {PluginService} from '../../../plugins/services/plugin.service';
import {NotificationsComponent} from '../../../features/components/notifications/notifications.component';

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
  notification = new NotificationsComponent();


  constructor(private pluginService: PluginService,
              private installedService: InstalledPluginsService,
              private router: Router, private gameService: GameService){ }

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
    },
    (error: Error) => {
      this.error = error;
      console.log('Available plugins: ' + this.error.message + ' - ' + this.error.code);
    });
  }

  onDeletePlugin(event) {
    if(event[0] === true) {
      this.gameService.deleteInstalledPluginFromGame(this.game.id, event[1].plugin_id).subscribe(deletedPlugin => {
        this.notification.showNotification('Plugin uninstalled correctly from game.', 'success');
        console.log('deleted');
        /* TODO load again the installed-plugins list */
      },
      (error: Error) => {
        console.log('Uninstall Plugin from game: ' + error.message + ' - ' + error.code);
        this.notification.showNotification('Can\'t uninstall plugin from game.', 'danger');
      })
    }
  }





}
