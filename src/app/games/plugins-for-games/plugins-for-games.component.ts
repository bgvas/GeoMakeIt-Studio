import {Component, Input, OnInit} from '@angular/core';
import {AvailablePluginsService} from './availbable-plugins/available-plugins.service';
import {InstalledPluginsService} from './instaled-plugins-of-a-game/installed-plugins.service';
import {Router} from '@angular/router';
import {GameService} from '../game.service';
import {AvailablePlugin} from '../../classes/plugins/available-plugin';

@Component({
  selector: 'app-plugins-for-games',
  templateUrl: './plugins-for-games.component.html',
  styleUrls: ['./plugins-for-games.component.css']
})
export class PluginsForGamesComponent implements OnInit {

  availablePlugins: AvailablePlugin[];
  installedPlugins: any;
  game: any;


  constructor(private availableService: AvailablePluginsService,
              private installedService: InstalledPluginsService,
              private router: Router, private gameService: GameService) { }

  ngOnInit(): void {

    // get game-object from game-service and send HTTP request for the installed plugins //
    this.game = this.gameService.object;

    if(this.game?.id === undefined) {
      this.router.navigate(['games']);
    }

    this.availableService.getAvailablePlugins().subscribe(data => {
      this.availablePlugins = data.data;
    });

    this.installedService.getInstalledPluginsPerGame(this.game?.id).subscribe(data => {
      this.installedPlugins = data;
    });
  }

  goToGamesList(){
    this.router.navigate(['games']);
  }




}
