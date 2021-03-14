import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements OnInit {

  @Input() content: any;

  constructor() { }

  ngOnInit(): void {
  }

}
