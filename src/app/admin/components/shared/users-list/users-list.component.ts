import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() usersData: any;
  timeZone: any;
  constructor() { }

  ngOnInit(): void {
    this.timeZone = environment.timeZone;
  }

}
