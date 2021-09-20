import { Component, OnInit } from '@angular/core';
import {GamePluginConfigService} from '../../../../gamePlugins/services/gamePluginConfig.service';
import {RootDesigner} from '../../../models/designers/rootDesignerClass/root-designer';
import {GamePluginDataService} from '../../../../gamePlugins/services/gamePluginData.service';
import {Error} from '../../../../error-handling/error/error';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.css']
})
export class ConfigsComponent implements OnInit {

  designer: RootDesigner;
  defaultDesigner: RootDesigner;
  data: any;
  error: Error;

  constructor(public designerService: GamePluginConfigService, public dataService: GamePluginDataService) { }

  ngOnInit(): void {

    /*this.designerService.getDataDesigner().subscribe(data => {
      this.designer = data;
    },
    error => {
      this.error = error;
    })

    this.designerService.getConfigDesigner().subscribe(data => {
          this.defaultDesigner = data;
    },
    error => {
      this.error = error;
    })*/
}

}
