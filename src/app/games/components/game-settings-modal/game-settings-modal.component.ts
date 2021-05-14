import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../models/games/game';


@Component({
  selector: 'app-game-settings-modal',
  templateUrl: './game-settings-modal.component.html',
  styleUrls: ['./game-settings-modal.component.css']
})
export class GameSettingsModalComponent implements OnInit {

  @Input() project: Game;
  projectSettings: any;


  constructor() { }

  ngOnInit(): void {
    this.projectSettings = this.project;
  }


}
