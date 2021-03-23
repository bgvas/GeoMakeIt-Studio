import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';
import {GameService} from '../games/game.service';


@Component({
  selector: 'app-delete-pop-up',
  templateUrl: './delete-pop-up.component.html',
  styleUrls: ['./delete-pop-up.component.css']
})
export class DeletePopUpComponent implements OnInit {

  @Input() element;

  @Output() delete = new EventEmitter();


  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.location.back();
  }

  onDelete(): void {
    this.delete.emit(true);
    window.close();
  }

}
