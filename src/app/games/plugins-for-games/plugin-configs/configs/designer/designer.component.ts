import {Component, Input, OnInit} from '@angular/core';
import {RootDesigner} from '../../../../../classes/rootDesignerClass/root-designer';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  @Input() designerFile: any;

  designer: RootDesigner;

  constructor() { }

  ngOnInit(): void {
   this.designerFile.subscribe(data => {
     this.designer = data;
   })
  }

}
