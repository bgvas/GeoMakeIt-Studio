import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';
import {Subject} from 'rxjs';
import {FeaturesService} from '../../../shared/services/features.service';
import {Router} from '@angular/router';
import {PluginService} from '../../services/plugin.service';
import {takeUntil} from 'rxjs/operators';
import {GameService} from '../../../games/services/game.service';

@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.css']
})
export class PluginCardComponent implements OnInit, OnDestroy {

  @Input() plugin: any;
  @Output() deleted = new EventEmitter();
  notification = new NotificationsComponent();
  private unsubscribe = new Subject<void>();

  constructor(private service: PluginService, private featureService: FeaturesService, private router: Router, private gameService: GameService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // returning plugin from deletePopUp, if user agree to delete //
  onDelete(plugin) {
      this.service.deletePluginById(plugin?.id).pipe(takeUntil(this.unsubscribe)).subscribe(pluginDeleted => {
        this.deleted.emit(plugin);
      },
      error => {
        this.deleted.emit(false);
        console.log('Deleting plugin: ' + error.code + ' - ' + error.message);
      })
  }

  // send project to deletePopUp, and ask user if he want to delete //
  onClickDelete(plugin) {
    this.featureService.project = null;
    this.featureService.project = plugin;
    console.log(this.featureService.project)
  }

  onClickOpen(plugin) {
    this.service.plugin = plugin;
    this.router.navigate(['plugins/setup']);
  }

}
