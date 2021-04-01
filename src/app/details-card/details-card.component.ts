import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from 'events';
import {Plugin} from '../classes/plugins/plugin';


@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css']
})


export class DetailsCardComponent implements OnInit {

  @Input() details: Plugin;
  @Output() plugin = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
      this.plugin.emit(true);
  }

  isEmptyObject(): boolean {
       return !!this.details.title;
  }

  noPlugin(): void {
     this.plugin.emit(false);
  }
}
