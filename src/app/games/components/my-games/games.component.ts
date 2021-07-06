import {Component, OnDestroy, OnInit} from '@angular/core';
import { NotificationsComponent} from '../../../shared/components/notifications/notifications.component';
import {GameService} from '../../services/game.service';
import {GameRoot} from '../../models/games/game-root';
import {Error} from '../../../classes/error/error';
import { Location } from '@angular/common';
import {Game} from '../../models/games/game';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit, OnDestroy {

    delete: any;
    afterDelete = new NotificationsComponent();
    object: any;
    listOfGames: Game[];
    gameById: Game;
    error: Error;
    showSpinner: boolean;
    private unsubscribe = new Subject<void>();
   


  constructor(private service: GameService, private location: Location) { }

  ngOnInit(): void {
      this.showSpinner = true; // display spinner while loading //
      this.loadListOfGames();
  }

  // save game-plugin to service, for sharing between components //
  onClick(obj) {
      this.service.object = obj;
  }

  ngOnDestroy() {
      this.unsubscribe.next();
      this.unsubscribe.complete();
  }

    // onClick delete-button, delete game and display notification
  onDelete(data): void {
      if (data) {
            this.service.deleteGameOfSpecificUser(this.service.object.id).pipe(takeUntil(this.unsubscribe)).subscribe(deletedGame => {
              this.loadListOfGames();
              this.afterDelete.showNotification('Game deleted!', 'success');
            },
            error => {
              console.log('Deleting game: ' + error.code + ' - ' + error.message);
              this.afterDelete.showNotification('Can\'t delete game. Something went wrong!', 'danger');
            })
      }
  }


  loadListOfGames() {
        this.service.getGamesOfSpecificUser().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
            this.listOfGames = data.data;
            this.showSpinner = false;    // hide spinner
        },
        error => {
            /* errorFromProjectSubscribe.message = 'No games found.'*/
            console.log('Game List: ' + error.code + ' - ' + error.message);
            this.error = error;
            this.showSpinner = false;    // hide spinner
        })
  }
  
  backgroundColor(index: number): string {
      if (index % 2 === 0) {
          return 'bg-light';
      } else {
          return 'bg-white';
      }
  }




}
