import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GameService} from './services/game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnChanges {

  data?: any;
  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService.save_temporary = 'Hello from Game';
  }

  ngOnChanges(changes: SimpleChanges) {
  }


}
