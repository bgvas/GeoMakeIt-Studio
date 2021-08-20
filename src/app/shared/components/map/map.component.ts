import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Point} from '../../../games/models/point/point';
import {ZonesEditor} from '../../../plugins/models/designer-models/zones/ZonesEditor';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  selectedLat: any;
  selectedLng: any;
  arrayOfCoordinates: ZonesEditor[];
  marker = 'assets/img/note2.png'

  @Input() points: ZonesEditor[];
  @Output() coordinates = new EventEmitter<any>();
  @Output() ChangeLocation = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onMapClick(event) {
    const newPoint = new ZonesEditor();
    newPoint.center.latitude = event?.coords.lat;
    newPoint.center.longitude = event?.coords.lng;
    newPoint.title = 'new Point';
    this.points.push(newPoint);
  }

  clickedMarker(label: string, index: number) {

  }

  onDelete(index: number) {
    this.points.splice(index, 1);
  }

  onChangeLocation(event, index) {
    this.points[index].center.latitude = event?.coords.lat;
    this.points[index].center.longitude = event?.coords.lng;
  }

  onRadiusChange(event: number, index) {
    this.points[index].radius = Math.round(event);
  }




}
