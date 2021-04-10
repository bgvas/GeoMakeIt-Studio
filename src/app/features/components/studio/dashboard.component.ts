import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lat = 40.730610;
  lng = -73.935242;
  selectedLat: any;
  selectedLng: any;

  constructor() { }

  ngOnInit() {

  }

  onMapClick(event) {
    this.selectedLat = event?.coords.lat;
    this.selectedLng = event?.coords.lng;
  }
}
