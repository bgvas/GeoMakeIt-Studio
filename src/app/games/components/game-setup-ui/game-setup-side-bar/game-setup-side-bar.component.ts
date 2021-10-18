import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../../../services/game.service';
import {PublicService} from '../../../../public.service';
import {take, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-game-setup-side-bar',
  templateUrl: './game-setup-side-bar.component.html',
  styleUrls: ['./game-setup-side-bar.component.css']
})
export class GameSetupSideBarComponent implements OnInit, OnDestroy {

  project = JSON.parse(sessionStorage.getItem('project')) || null;
  data?: any;
  unsubscribe = new Subject<void>();

  constructor(private router: Router, private gameService: GameService,
              private activatedRoute: ActivatedRoute, private publicService: PublicService) {
    this.publicService.getProject().pipe(takeUntil(this.unsubscribe)).subscribe(updatedProject => {
      this.project = updatedProject;
    })
  }

  ngOnInit(): void {
    if(this.project === null) {
      this.router.navigate(['home']);
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log('exit');
  }

  onMapClick() {
    this.router.navigate(['/games/map']);
  }

  getData() {
  }


}
