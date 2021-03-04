import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  listOfGames = [{
    title: 'Hello',
    description: 'asdfsdfvadsvsdvsdag'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
