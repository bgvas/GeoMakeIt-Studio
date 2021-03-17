import { Component, OnInit } from '@angular/core';
import { NotificationsComponent} from '../../notifications/notifications.component';
import {GameService} from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

    delete: any;
    afterDelete = new NotificationsComponent();
    object: any;
    listOfGames: any;

  constructor(private service: GameService) { }

  ngOnInit(): void {
      this.service.getGamesOfSpecificUser(1).subscribe(data => this.listOfGames = data)
  }

  // save game-object to service, for sharing between component //
  onClick(obj) {
      this.service.object = obj;
  }

  // when clicked delete button, delete game and if done, show notification
  onDelete(data): void {
      if (data) {
          // TODO -> send delete request to backEnd //
          this.afterDelete.showNotification('Game ' + this.service.object.title + '  Deleted', 'success');
      } else {
          this.afterDelete.showNotification('Can\'t delete game: ' + this.service.object.title + '. Something went wrong!', 'danger');
      }
  }


}
