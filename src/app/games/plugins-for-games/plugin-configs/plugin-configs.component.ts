import { Component, OnInit } from '@angular/core';
import {GameService} from '../../game.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Game} from '../../../classes/games/game';

@Component({
  selector: 'app-plugin-configs',
  templateUrl: './plugin-configs.component.html',
  styleUrls: ['./plugin-configs.component.css']
})

export class PluginConfigsComponent implements OnInit {

  plugin: any;
  game: any;
  constructor(private service: GameService, private location: Location) { }

  ngOnInit(): void {
      if (this.service.object instanceof Object) {
        this.plugin = this.service.object.plugin;
          console.log('Game: ' + this.service.object.game?.id);
          this.service.getGameById(this.service.object.game?.id).subscribe(data => {
            this.game = data;
          });
      } else {
        this.plugin = false;
        this.location.back();
      }
  }

  gameExist(game): boolean {
    return (game instanceof Object)
  }

}
