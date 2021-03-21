import {Component, Input, OnInit} from '@angular/core';
import {GameService} from '../../games/game.service';
import {Router} from '@angular/router';
import {RootAvailablePlugins} from '../../classes/plugins/root-available-plugins';
import {AvailablePlugin} from '../../classes/plugins/available-plugin';

@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.css']
})
export class PluginCardComponent implements OnInit {

  @Input() plugin: AvailablePlugin;

  constructor(private service: GameService, private router: Router) { }

  ngOnInit(): void {
  }

  deletePlugin(event): boolean {
    return event;
  }

  goToConfig(): void {
    this.service.object = this.plugin;
    this.router.navigate(['/games/plugins/config']);
  }

}
