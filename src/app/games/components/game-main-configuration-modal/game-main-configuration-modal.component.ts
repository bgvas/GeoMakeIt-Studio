import { Component, OnInit } from '@angular/core';
import {GamePluginsService} from '../../../gamePlugins/services/game-plugins.service';
import {GamePluginDataNamesModel} from '../../../gamePlugins/models/game-plugin-data-names-model';

@Component({
  selector: 'app-game-main-configuration-modal',
  templateUrl: './game-main-configuration-modal.component.html',
  styleUrls: ['./game-main-configuration-modal.component.css']
})
export class GameMainConfigurationModalComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }


}
