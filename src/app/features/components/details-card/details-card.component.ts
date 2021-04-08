import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from 'events';
import {Plugin} from '../../../plugins/models/plugin';
import {PluginService} from '../../../plugins/services/plugin.service';
import {PluginRelease} from '../../../plugins/models/available_plugins/plugin-release';


@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css']
})


export class DetailsCardComponent implements OnInit {

  @Input() plugin: Plugin;

  release: PluginRelease;

  constructor(private service: PluginService) { }

  ngOnInit(): void {
      this.service.getReleasesOfPlugin(this.plugin?.id).subscribe(releases => {
          this.release = this.lastReleaseOfPlugin(releases.data);
      })
  }

    lastReleaseOfPlugin(releases: PluginRelease[]): PluginRelease {

        const index = releases.length - 1;
        if ( index < 0 || index === undefined) {
            return new PluginRelease();
        } else {
            return releases[index];
        }
    }


}
