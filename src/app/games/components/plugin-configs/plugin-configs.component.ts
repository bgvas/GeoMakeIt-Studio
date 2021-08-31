import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Location} from '@angular/common';
import {Error} from '../../../classes/error/error'
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-plugin-configs',
  templateUrl: './plugin-configs.component.html',
  styleUrls: ['./plugin-configs.component.css']
})

export class PluginConfigsComponent implements OnInit, OnDestroy {

  plugin: any;
  game: any;
  showSpinner: boolean;
  private unsubscribe = new Subject<void>();

  constructor(private service: GameService, private location: Location) { }

  ngOnInit(): void {
    this.showSpinner = true;
      if (this.service.object instanceof Object) {
        this.plugin = this.service.object.plugin;
          console.log('Game: ' + this.service.object.game?.id);
          this.service.getGameById(this.service.object.game?.id).pipe(takeUntil(this.unsubscribe)).subscribe(data => {
            this.showSpinner = false;
            this.game = data;
          },
              (error: Error) => {
                this.showSpinner = false;
                console.log('PluginConfigs: ' + error.message + ' - ' + error.code);
              });

      } else {
        this.showSpinner = false;
        this.plugin = false;
        this.location.back();
      }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  gameExist(game): boolean {
    return (game instanceof Object)
  }

}
