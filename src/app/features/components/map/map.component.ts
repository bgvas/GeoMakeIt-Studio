import {Component, Input, OnInit, Output} from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  selectedLat: any;
  selectedLng: any;

  @Input() lat: any;
  @Input() lng: any;
  @Output() coordinates = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.lat = parseFloat(this.lat.toString());
    this.selectedLat = this.lat;
    this.lng = parseFloat(this.lng.toString());
    this.selectedLng = this.lng;
  }

  onMapClick(event) {
    this.selectedLat = event?.coords.lat;
    this.selectedLng = event?.coords.lng;
    const arrayOfCoordinates = [];
    arrayOfCoordinates.push(this.selectedLat);
    arrayOfCoordinates.push(this.selectedLng);
    this.coordinates.emit(arrayOfCoordinates);
  }

}
