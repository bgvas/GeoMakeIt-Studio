import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Zones_model} from '../../../plugins/models/designer-models/zones/Zones_model';

@Component({
  selector: 'app-table-with-selected-points',
  templateUrl: './table-with-selected-points.component.html',
  styleUrls: ['./table-with-selected-points.component.css']
})
export class TableWithSelectedPointsComponent implements OnInit {


  @Input() points: Zones_model[];
  @Output() pointForDelete = new EventEmitter<number>();
  @Output() pointToEdit = new EventEmitter<Zones_model>();
  @Output() pointToUpdate = new EventEmitter<Zones_model>();
  selectedPoint: Zones_model;

  constructor() { }

  ngOnInit(): void {
  }

  // send selected pointToDelete, to gameSetup for delete //
  onDelete(index: number) {
    this.pointForDelete.emit(index);
  }

  // return point from pointSetup //
  fromPointSetup(point: Zones_model) {
    this.pointToUpdate.emit(point); // send point to gameSetup for db update//
  }

  // selected point from points-table //
  onSelect(point: Zones_model, index: number) {
    point.id = index;
    this.pointToEdit.emit(point); // send point to pointSetup for edit //
  }


}
