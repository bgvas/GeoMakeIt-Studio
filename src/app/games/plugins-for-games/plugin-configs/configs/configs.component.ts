import { Component, OnInit } from '@angular/core';
import {DesignerService} from './designer.service';
import {RootDesigner} from '../../../../classes/rootDesignerClass/root-designer';
import {DesignerItem} from '../../../../classes/designerItem/designer-item';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.css']
})
export class ConfigsComponent implements OnInit {

  designer: RootDesigner;

  constructor(public service: DesignerService) { }

  ngOnInit(): void {
    this.service.getDefaultConfigDesigner().subscribe(data => {
      this.designer = data;
      /*for (const item in data.designer) {
        for (const obj in data.designer[item].components) {
          console.log(data.designer[item].components[obj].type);
        }
      }*/

    })
  }

}
