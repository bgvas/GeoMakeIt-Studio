import {Component, Input, EventEmitter, OnInit, Output, OnDestroy} from '@angular/core';
import {Location} from '@angular/common';
import {Subject} from 'rxjs';
import {GameService} from '../../../games/services/game.service';
import {FeaturesService} from '../../services/features.service';



@Component({
  selector: 'app-delete-pop-up',
  templateUrl: './delete-pop-up.component.html',
  styleUrls: ['./delete-pop-up.component.css']
})
export class DeletePopUpComponent implements OnInit, OnDestroy {

  @Input() deleteItemToolTip;
  @Output() delete = new EventEmitter();
  private unsubscribe = new Subject<void>();


  constructor(private location: Location, private sharedService: FeaturesService) { }

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
     this.delete.emit(this.sharedService.project);
  }

}
