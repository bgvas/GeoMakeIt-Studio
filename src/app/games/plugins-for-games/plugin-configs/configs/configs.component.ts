import { Component, OnInit } from '@angular/core';
import {DesignerService} from './designer.service';
import {RootDesigner} from '../../../../classes/designers/rootDesignerClass/root-designer';
import {DataFileService} from './data-file.service';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.css']
})
export class ConfigsComponent implements OnInit {

  designer: RootDesigner;
  defaultDesigner: RootDesigner;
  data: any;
  error: any;

  constructor(public designerService: DesignerService, public dataService: DataFileService) { }

  ngOnInit(): void {

    /*this.designerService.getAPi().subscribe(data => {
      console.log(data);
    })*/

    this.designerService.getDataDesigner().subscribe(data => {
      this.designer = data;
    },
    error => {
      this.error = error;
    })

    this.designerService.getConfigDesigner().subscribe(data => {
          this.defaultDesigner = data;
          console.log(data);
    },
    error => {
      this.error = error;
    })
  }

}
