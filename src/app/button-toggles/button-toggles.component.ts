import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-toggles',
  templateUrl: './button-toggles.component.html',
  styleUrls: ['./button-toggles.component.css']
})
export class ButtonTogglesComponent implements OnInit {

  @Input() element: string;
  @Input() name: string;
  @Input() id: number;

  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(data): void {
    this.delete.emit(data);
  }

}
