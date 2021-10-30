import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Game} from '../../../games/models/games/game';
import {MarkerModel} from '../../models/marker-model';

@Component({
  selector: 'app-geomakeit-plugin-startup-box',
  templateUrl: './geomakeit-plugin-startup-box.component.html',
  styleUrls: ['./geomakeit-plugin-startup-box.component.css']
})
export class GeomakeitPluginStartupBoxComponent implements OnInit, OnChanges, OnDestroy {

  @Input() gamePlugins: any;
  project?: Game;
  startUp?: any;

  constructor() { }

  ngOnInit(): void {
    this.project = <Game>JSON.parse(sessionStorage.getItem('project'));
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadStartUpContents();
  }

  ngOnDestroy() {
  }

  initializeForm() {

  }

  loadStartUpContents() {
    const contents = this.gamePlugins?.filter(e => e['name'] === 'start-up')?.pop()?.contents || null;
    this.startUp = <Array<string>>JSON.parse(contents);
    console.log(this.startUp)
  }

}
