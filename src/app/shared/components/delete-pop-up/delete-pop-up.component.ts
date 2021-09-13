import {Component, Input, EventEmitter, OnInit, Output, OnDestroy} from '@angular/core';
import {Location} from '@angular/common';
import {Subject} from 'rxjs';



@Component({
  selector: 'app-delete-pop-up',
  templateUrl: './delete-pop-up.component.html',
  styleUrls: ['./delete-pop-up.component.css']
})
export class DeletePopUpComponent implements OnInit, OnDestroy {

  @Input() element;
  @Input() deleteItemToolTip;
  @Output() delete = new EventEmitter();
  private unsubscribe = new Subject<void>();


  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onCancel(): void {
    this.location.back();
  }

  onDelete(): void {
    this.delete.emit(true);
  }

}
