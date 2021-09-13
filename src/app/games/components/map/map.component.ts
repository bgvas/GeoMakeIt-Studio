import {Component, Input, OnInit, Output, EventEmitter, ViewChild, OnDestroy} from '@angular/core';
import {ZonesEditor} from '../../../plugins/models/designer-models/zones/ZonesEditor';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})



export class MapComponent implements OnInit, OnDestroy  {

  selectedLat: number;
  selectedLng: number;
  arrayOfCoordinates: ZonesEditor[];
  marker = 'assets/img/note2.png'
  private unsubscribe = new Subject<void>();


  @Input() points: ZonesEditor[];
  @Output() coordinates = new EventEmitter<any>();
  @Output() ChangeLocation = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onMapClick(clickedPoint) {
    this.points = this.points || [];
    const newPoint = new ZonesEditor();
    newPoint.center.latitude = clickedPoint?.coords.lat;
    newPoint.center.longitude = clickedPoint?.coords.lng;
    newPoint.title = 'new Point';
    newPoint.unique_id = 'zone_new_point';
    newPoint.radius = 60; // default radius
    this.points.push(newPoint);
  }

  clickedMarker(label: string, index: number) {
  }

  onDelete(index: number) {
    this.points = this.points || [];
    this.points.splice(index, 1);
  }

  onChangeLocation(change: any, index: number) {
    this.points[index].center.latitude = change?.coords.lat;
    this.points[index].center.longitude = change?.coords.lng;
  }

  onRadiusChange(changedRadius: number, index: number) {
    this.points[index].radius = Math.round(changedRadius);
  }




}
