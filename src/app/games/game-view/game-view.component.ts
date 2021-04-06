import {Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';
import {Game} from '../../classes/games/game';
import {Router} from '@angular/router';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

  game: Game;
  gameReleases: Game[];

  constructor(private service: GameService, private router: Router) { }

  ngOnInit(): void {

    this.game = this.service.object;
    if(this.game === undefined){
      this.router.navigate(['games']);
    }
    this.service.getGameRelease(this.game.id).subscribe(releases => {
      this.gameReleases = releases.data;
    });
  }

  convertToNormalDate(date) {
    if ( date !== '') {
      const newDate =  new Date(date);
      return formatDate(newDate, 'dd/MM/yyyy', 'en-US');
    }
  }



}
