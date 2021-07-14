import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {UserService} from '../../user-management/services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  usersList: any[];
  loadingUsers: boolean;
  timeZone: any;

  constructor(private service: AdminService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.timeZone = environment.timeZone;
    this.loadingUsers = true;
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(allUsers => {
      this.usersList = allUsers;
      this.loadingUsers = false;
    })
  }

  onEdit(user) {
    this.router.navigate(['admin/users/edit']);
    this.service.storeObject = user;
  }

}
