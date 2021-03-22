import { Component, OnInit } from '@angular/core';
import { NotificationsComponent} from '../../notifications/notifications.component';
import {GameService} from '../game.service';
import {GameRoot} from '../../classes/games/game-root';
import {Error} from '../../classes/error/error';
import { Location } from '@angular/common';
import {Game} from '../../classes/games/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

    delete: any;
    afterDelete = new NotificationsComponent();
    object: any;
    listOfGames: Game[];
    gameById: Game;
    error: Error;
    showSpinner: boolean

  constructor(private service: GameService, private location: Location) { }

  ngOnInit(): void {
      this.showSpinner = true; // display spinner while loading //

      this.service.getGamesOfSpecificUser().subscribe(data => {
          this.listOfGames = data.data.filter(items => items.deleted_at === null);
          this.showSpinner = false;   // hide spinner
      },
      error => {
         /* error.message = 'No games found.'*/
          console.log('List of games: ' + error.code + ' - ' + error.message);
          this.error = error;
          this.showSpinner = false;    // hide spinner
      });

      /*this.service.getGameById(1).subscribe(data => {

      },
      error => {
          this.error = error;
          this.showSpinner = false;   // hide spinner
      });*/
  }


  // save game-object to service, for sharing between components //
  onClick(obj) {
      this.service.object = obj;
  }

  // onClick delete-button, delete game and display notification
  onDelete(data): void {
      if (data) {
          this.service.deleteGameOfSpecificUser(this.service.object.id).subscribe(
              deletedGame => {
                  this.service.getGamesOfSpecificUser().subscribe(values => {
                          this.listOfGames = data.data?.filter(items => items.deleted_at === null);
                  },
                      error => {
                          /* error.message = 'No games found.'*/
                          console.log('Refresh Game List: ' + error.code + ' - ' + error.message);
                          this.error = error;
                  })
                  this.afterDelete.showNotification('Game ' + this.service.object.title + '  Deleted', 'success');
              },
              error => {
                  console.log('Deleting game: ' + error.code + ' - ' + error.message);
                  this.afterDelete.showNotification('Can\'t delete game: ' + this.service.object.title + '. Something went wrong!', 'danger');
              })
      }
  }


}
