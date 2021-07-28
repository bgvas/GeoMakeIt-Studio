import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';
import {UserService} from '../../../user-management/services/user.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Error} from '../../../classes/error/error';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit, OnDestroy {

  usersList: any;
  loadingUsers: boolean;
  timeZone: any;
  private unsubscribe = new Subject<void>();

  constructor(private service: AdminService, private router: Router, private userService: UserService) { }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    }

  ngOnInit(): void {
    this.timeZone = environment.timeZone;
    this.loadingUsers = true;
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().pipe(takeUntil(this.unsubscribe)).subscribe(allUsers => {
      console.log(allUsers);
      this.usersList = allUsers;
      this.loadingUsers = false;
    }, (error: Error) => {
      console.log('Get all users error: ' + error.code + ' - ' + error.message);
    })
  }

  onEdit(user) {
    this.router.navigate(['admin/users/edit']);
    this.service.storeObject = user;
  }

}
