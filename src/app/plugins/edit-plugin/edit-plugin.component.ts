import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-edit-plugin',
  templateUrl: './edit-plugin.component.html',
  styleUrls: ['./edit-plugin.component.css']
})
export class EditPluginComponent implements OnInit {

  pluginId;
  
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {

    // getting id of plugin for edit
    this.router.queryParams.subscribe(params => {this.pluginId = +params['id'] || 0; })
  }

}
