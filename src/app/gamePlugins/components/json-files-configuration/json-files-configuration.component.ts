import { Component, OnInit } from '@angular/core';
import {GamePluginDataNamesModel} from '../../models/game-plugin-data-names-model';
import {GamePluginsService} from '../../services/game-plugins.service';

@Component({
  selector: 'app-json-files-configuration',
  templateUrl: './json-files-configuration.component.html',
  styleUrls: ['./json-files-configuration.component.css']
})
export class JsonFilesConfigurationComponent implements OnInit {

  gamePlugin_DataNames_Array: GamePluginDataNamesModel[];
  names = new Array<string>();
  tabClick: number;


  constructor(private gamePluginService: GamePluginsService) { }

  ngOnInit(): void {
    this.load_Button_FileTitles()
  }

  load_Button_FileTitles() {
    this.gamePluginService.getGamePluginDataJsonFiles(1).subscribe(name => {
      this.gamePlugin_DataNames_Array = name
    })
  }

  onTabClick(filename) {
    this.tabClick = filename;
  }

}
