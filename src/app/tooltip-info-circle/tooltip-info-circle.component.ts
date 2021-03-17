import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tooltip-info-circle',
  templateUrl: './tooltip-info-circle.component.html',
  styleUrls: ['./tooltip-info-circle.component.css']
})
export class TooltipInfoCircleComponent implements OnInit {

  @Input() tooltip: string;
  constructor() { }

  ngOnInit(): void {
  }

}
