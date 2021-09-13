import {ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FeaturesService} from '../../services/features.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AppService} from '../../../app.service';
import {User} from '../../../user-management/models/user';



@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit, OnDestroy, OnChanges {

  open: any;
  authenticatedUser: User;
  userFromSocialMedia: any;
  private unsubscribe = new Subject<void>();

  constructor(private router: Router, private service: FeaturesService, private cd: ChangeDetectorRef) { }

  public set userFromSocial(user) {
   this.userFromSocialMedia = user;
    this.cd.detectChanges();
  }

  public get userFromSocial() {
    return this.userFromSocialMedia;
  }


  ngOnInit(): void {
      this.authenticatedUser = JSON.parse(sessionStorage.getItem('user'));
  }

  ngOnChanges() {
    this.authenticatedUser = this.userFromSocial;
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onHomeClick() {
    this.router.navigate(['home']);
  }


  onLogout() {
    localStorage.clear();
    sessionStorage.clear();
    this.service.logout().pipe(takeUntil(this.unsubscribe)).subscribe(logoutData => {
    })
    this.router.navigate(['login']);
  }




}
