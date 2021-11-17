import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FeaturesService} from '../../../shared/services/features.service';
import {Subject} from 'rxjs';
import {take} from 'rxjs/operators';
import {AppService} from '../../../app.service';
import {AuthService} from '../../../authentication/services/auth.service';


@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit, OnDestroy {

  open: any;
  authenticatedUser: any;
  private unsubscribe = new Subject<void>();

  constructor(private router: Router, private service: FeaturesService, private authService: AuthService, private appService: AppService) { }

  ngOnInit(): void {
      this.authenticatedUser = this.appService.currentUser();
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
    this.authService.logout().pipe(take(1)).subscribe(logoutData => {
    })
    this.router.navigate(['login']);
  }




}
