import {Component, OnInit, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-image-as-check-box',
  templateUrl: './image-as-check-box.component.html',
  styleUrls: ['./image-as-check-box.component.css']
})
export class ImageAsCheckBoxComponent implements OnInit {

  @Output() template = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onSelect(template) {
    this.template.emit(template);
  }

}
