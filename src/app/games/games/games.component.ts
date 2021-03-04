import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  listOfGames = [
      {
        title: 'Fight Club',
        description: 'My First Game'
      },
      {
        title: 'Quiz game',
        description: 'My First quiz Game'
      }
      ];

  constructor() { }

  ngOnInit(): void {
  }

}
