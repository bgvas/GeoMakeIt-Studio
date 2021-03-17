import { Component, OnInit } from '@angular/core';
import {DesignerService} from './designer/designer.service';
import {RootDesigner} from '../../../../classes/rootDesignerClass/root-designer';
import {DesignerItem} from '../../../../classes/designerItem/designer-item';
import {DataFileService} from './designer/data-file.service';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.css']
})
export class ConfigsComponent implements OnInit {

  designer: RootDesigner;
  data: any;

  constructor(public designerService: DesignerService, public dataService: DataFileService) { }

  ngOnInit(): void {
    this.designerService.getDefaultConfigDesigner().subscribe(data => {
      this.designer = data;
    })
  }

}
