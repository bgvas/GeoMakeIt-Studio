import {Component, Input, OnInit} from '@angular/core';
import {AvailablePluginsService} from './availbable-plugins/available-plugins.service';
import {InstalledPluginsService} from './instaled-plugins-of-a-game/installed-plugins.service';
import {Router} from '@angular/router';
import {GameService} from '../game.service';

@Component({
  selector: 'app-plugins-for-games',
  templateUrl: './plugins-for-games.component.html',
  styleUrls: ['./plugins-for-games.component.css']
})
export class PluginsForGamesComponent implements OnInit {

  availablePlugins: any;
  installedPlugins: any;
  game: any;
  gameId: number;


  constructor(private availableService: AvailablePluginsService,
              private installedService: InstalledPluginsService,
              private router: Router, private gameService: GameService) { }

  ngOnInit(): void {

    // get game-object from game-service and send HTTP request for the installed plugins //
    this.game = this.gameService.object;
    this.gameId = 1; // this.game.id;

    this.availableService.getAvailablePlugins().subscribe(data => {
      this.availablePlugins = data;
    });

    this.installedService.getInstalledPluginsPerGame(this.gameId).subscribe(data => {
      this.installedPlugins = data;
    });
  }




}
