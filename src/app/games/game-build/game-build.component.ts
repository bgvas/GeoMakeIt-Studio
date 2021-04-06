import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';
import {Game} from '../../classes/games/game';

@Component({
  selector: 'app-build-game',
  templateUrl: './game-build.component.html',
  styleUrls: ['./game-build.component.css']
})
export class GameBuildComponent implements OnInit {

  game: Game;
  isCompleted: boolean;

  constructor(private service: GameService) { }

  ngOnInit(): void {
  this.isCompleted = false;
    this.game = this.service.object;
  }

  onBuild(state){
    this.isCompleted = !state;
    return this.isCompleted;
  }

}
