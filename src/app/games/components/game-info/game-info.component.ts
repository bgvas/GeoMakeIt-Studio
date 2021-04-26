import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {

  project = {
    title: 'My first Game',
    description: 'This is my first game in GeoMakeIt studio',
    type: 'Game',
    release: 'v1.0.0',
    author: 'Vasilis',
    createdAt: '2021-04-24T09:45:05.000000Z'
  }

  constructor() { }

  ngOnInit(): void {
  }

  convertToReadableDate(dateStamp) {
    if ( dateStamp !== '') {
      const newDate =  new Date(dateStamp);
      return formatDate(newDate, 'dd/MM/yyyy', 'en-US');
    }
  }

}
