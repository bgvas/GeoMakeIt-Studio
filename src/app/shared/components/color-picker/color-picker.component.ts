import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  @Output() selectedColor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  colorSelection(color) {
    this.selectedColor.emit(color.value);
  }
}
