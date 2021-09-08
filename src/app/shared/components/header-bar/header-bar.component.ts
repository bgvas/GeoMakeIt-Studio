import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FeaturesService} from '../../services/features.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AppService} from '../../../app.service';


@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit, OnDestroy {

  open: any;
  authenticated: any;
  private unsubscribe = new Subject<void>();

  constructor(private router: Router, private service: FeaturesService, private appService: AppService) { }

  ngOnInit(): void {
    //console.log(this.appService.GetCurrentUser());
      this.authenticated = JSON.parse(sessionStorage.getItem('user'));
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
    this.service.logout().pipe(takeUntil(this.unsubscribe)).subscribe(logoutData => {
    })
    this.router.navigate(['login']);
  }




}
