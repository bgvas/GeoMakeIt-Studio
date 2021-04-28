import {Component, Input, OnInit} from '@angular/core';
import {FeaturesService} from '../../services/features.service';
import {Error} from '../../../classes/error/error';

@Component({
  selector: 'app-geomakeit-help',
  templateUrl: './geomakeit-help.component.html',
  styleUrls: ['./geomakeit-help.component.css']
})
export class GeomakeitHelpComponent implements OnInit {

  helpFile: any;
  error: Error;

  constructor(private service: FeaturesService) { }

  ngOnInit(): void {
      this.service.getHelpFile().subscribe(help => {
        this.helpFile = help;
      },
          (e: Error) => {
              console.log('Help File: ' + e.message + ' - ' + e.code);
              this.error = e;
          })
  }

}
