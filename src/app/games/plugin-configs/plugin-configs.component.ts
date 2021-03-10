import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-plugin-configs',
  templateUrl: './plugin-configs.component.html',
  styleUrls: ['./plugin-configs.component.css']
})
export class PluginConfigsComponent implements OnInit {

  plugin;
  constructor(private service: GameService) { }

  ngOnInit(): void {
    this.plugin = this.service.object;
    console.log(this.plugin);
  }

}
