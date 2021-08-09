import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-tool-tip',
  templateUrl: './custom-tool-tip.component.html',
  styleUrls: ['./custom-tool-tip.component.css']
})
export class CustomToolTipComponent implements OnInit {

  @Input() Text: any;

  constructor() { }

  ngOnInit(): void {
  }



}
