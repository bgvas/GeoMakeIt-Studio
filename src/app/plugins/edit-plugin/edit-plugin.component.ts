import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {Location} from '@angular/common';
import {PluginService} from '../plugin.service';
import { Plugin} from '../../classes/plugins/plugin';

@Component({
  selector: 'app-edit-plugin',
  templateUrl: './edit-plugin.component.html',
  styleUrls: ['./edit-plugin.component.css']
})
export class EditPluginComponent implements OnInit {

  plugin: Plugin;


  constructor(private router: ActivatedRoute, private location: Location, private service: PluginService) { }

  ngOnInit(): void {
    this.plugin = this.service.object;
  }

  onCancel(): void {
    this.location.back();
  }

}
