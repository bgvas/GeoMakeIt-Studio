import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from 'events';


@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css']
})
export class DetailsCardComponent implements OnInit {

  @Input() details: any;
  @Output() noPlugIn = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
      this.noPlugIn.emit(true);
  }

  isEmptyObject(): boolean {
   if (this.details.title){
     console.log(true);
   } else {
     console.log(false);
   }
    return false;
  }

    noPlugInContent(): void{
      this.noPlugIn.emit(false);
  }
}
