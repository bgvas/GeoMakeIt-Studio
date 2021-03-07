import { Component, OnInit } from '@angular/core';
import { NotificationsComponent} from '../../notifications/notifications.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

    delete;
    notification = new NotificationsComponent();

  listOfGames = [
      {
        title: 'Fight Club',
        description: 'My First Game'
      },
      {
        title: 'Quiz game',
        description: 'My First quiz Game'
      }
      ];

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(data): void{
      if (data) {
          this.delete = true;
          this.notification.showNotification('Game Deleted', 'success');
      }
  }


}
