import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  project: any;

  constructor(private service: GameService) { }

  ngOnInit(): void {
    this.project = this.service.object;
  }

}
