import { Component, OnInit } from '@angular/core';
import {NotificationsComponent} from '../../notifications/notifications.component';

@Component({
  selector: 'app-plug-ins',
  templateUrl: './plug-ins.component.html',
  styleUrls: ['./plug-ins.component.css']
})
export class PlugInsComponent implements OnInit {

  listOfPlugins = [
    {
      identifier: 'asdfghjkl',
      title: 'Fight Plugin',
      description: 'Fight plugin'
    },
    {
      identifier: 'cbvcbcvbcvbcv',
      title: 'Quiz Plugin',
      description: 'Quiz plugin'
    }
  ];

  notification = new NotificationsComponent();
  delete;

  constructor() { }

  ngOnInit(): void {

  }

  onDelete(data): void {
    if (data) {
      this.delete = true;
      this.notification.showNotification('Plugin Deleted!', 'success');
    } else {
      this.notification.showNotification('Can\'t Delete this Plugin!', 'danger');
    }
  }

}
