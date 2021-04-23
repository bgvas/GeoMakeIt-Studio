import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Point} from '../../../games/models/point/point';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  selectedLat: any;
  selectedLng: any;
  arrayOfCoordinates = new Array<Point>();

  @Input() points: Point[];
  @Output() coordinates = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onMapClick(event) {
    const newPoint = new Point();
    newPoint.lat = event?.coords.lat;
    newPoint.lng = event?.coords.lng;
    newPoint.name = 'null';
    this.points.push(newPoint);
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  onDelete(index: number) {
    this.points.splice(index, 1);
  }


}
