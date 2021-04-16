import {Component, OnDestroy, OnInit} from '@angular/core';
import {GamesComponent} from '../../../games/components/my-games/games.component';
import {GameService} from '../../../games/services/game.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Game} from '../../../games/models/games/game';
import {Error} from '../../../classes/error/error';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  gamesList: Game[];
  private unsubscribe = new Subject<void>();

  constructor(private service: GameService) { }

  ngOnInit() {
    this.service.getGamesOfSpecificUser().pipe(takeUntil(this.unsubscribe)).subscribe(games => {
      this.gamesList = games.data;
    },
        (error: Error) => {
              console.log('StudioGameList: ' + error.message + ' - ' + error.code);
              this.gamesList = new Array<Game>();
        });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


}
