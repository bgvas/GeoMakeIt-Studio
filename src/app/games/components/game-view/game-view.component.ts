import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Game} from '../../models/games/game';
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
  logo: any;

  constructor(private service: GameService, private router: Router) { }

  ngOnInit(): void {

    this.logo = '/assets/img/logo-icon.png';
    this.game = this.service.object;
    if(this.game === undefined) {
      this.router.navigate(['games']);
    }
    this.service.getGameRelease(this.game?.id).subscribe(releases => {
      this.gameReleases = releases.data;
    });
  }

  // convert date from string format, to readable format //
  convertToReadableDate(date) {
    if ( date !== '') {
      const newDate =  new Date(date);
      return formatDate(newDate, 'dd/MM/yyyy', 'en-US');
    }
  }

  // if a logo selected, display it //
  onFileChange(event) {
      if ( event.target.files.length > 0) {
          const reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);
          reader.onload = (_event) => {
            this.logo = reader.result;
          }
      }
  }



}
