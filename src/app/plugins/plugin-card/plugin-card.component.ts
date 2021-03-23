import {Component, Input, OnInit} from '@angular/core';
import {GameService} from '../../games/game.service';
import {Router} from '@angular/router';
import { Plugin } from '../../classes/plugins/plugin';


@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.css']
})
export class PluginCardComponent implements OnInit {

  @Input() plugin: Plugin;

  constructor(private service: GameService, private router: Router) { }

  ngOnInit(): void {
    console.log('pluginCard: ' + this.service.object.id);
  }

  deletePlugin(event): boolean {
    return event;
  }

  goToConfig(): void {
    this.service.object = {
      plugin: this.plugin,
      game: this.service.object
    }
    this.router.navigate(['/games/plugins/config']);
  }

}
