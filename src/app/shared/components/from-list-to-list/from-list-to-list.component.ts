import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-from-list-to-list',
  templateUrl: './from-list-to-list.component.html',
  styleUrls: ['./from-list-to-list.component.css']
})
export class FromListToListComponent implements OnInit, OnChanges {

  selectedToAdd: any;
  selectedToRemove: any;
  _selectedItems = new Array<any>();
  @Input() availableItems = new Array<any>();
  @Input() preSelected = new Array<any>();
  @Output() selectedItems = new EventEmitter<any>();



  ngOnInit() {
    if(this.preSelected.length > 0) {
      this._selectedItems = this.preSelected
      this.availableItems = this.availableItems.filter(selectedData => {
        return this._selectedItems.indexOf(selectedData) < 0;
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
  }


  assign() {
    this._selectedItems = this._selectedItems.concat(this.selectedToAdd);
    this.availableItems = this.availableItems.filter(selectedData => {
      return this._selectedItems.indexOf(selectedData) < 0;
    });
    if(this._selectedItems.length > 0) {
      this.selectedItems.emit(this._selectedItems);
    }
    this.selectedToAdd = [];
  }

  unassign() {
    this.availableItems = this.availableItems.concat(this.selectedToRemove);
    this._selectedItems = this._selectedItems.filter(selectedData => {
      return this.availableItems.indexOf(selectedData) < 0;
    });
    this.selectedItems.emit(this._selectedItems);
    this.selectedToRemove = [];
  }

}
