import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameService} from '../games/game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-button-toggles',
  templateUrl: './button-toggles.component.html',
  styleUrls: ['./button-toggles.component.css']
})
export class ButtonTogglesComponent implements OnInit {

  @Output() delete = new EventEmitter();
  @Input() game: any;


  constructor(public service: GameService, private router: Router) { }

  ngOnInit(): void {
  }

  // if clicked, delete button, return true to parent component //
  onDelete(data): void {
    if (data) {
      this.delete.emit(true);
    }
  }

  // send gameObject to pluginForGames, in order to add or edit plugins of your game//
  sendDataToPluginsForGames(): void {
    this.service.object = this.game;
    this.router.navigate(['/games/plugins']);
  }

  sendDataToGameView(): void {
    this.service.object = this.game;
    this.router.navigate(['/games/view']);
  }

  sendDataToGameBuild(): void {
    this.service.object = this.game;
    this.router.navigate(['/games/build']);
  }

}
