import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-plugin',
  templateUrl: './edit-plugin.component.html',
  styleUrls: ['./edit-plugin.component.css']
})
export class EditPluginComponent implements OnInit {

  pluginId;
  descriptionObject = {
    title: 'Demo Plugin',
    subTitle: 'small description of plugin',
    version: '1.0.0',
    main: 'example.plugin',
    status: '0',
    updatedAt: '1 second ago',
    createdAt: '15 second ago'
  }

  constructor(private router: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    // getting id of plugin from url query
    this.router.queryParams.subscribe(params => { this.pluginId = +params['id'] || 0; })
  }

  onCancel(): void {
    this.location.back();
  }

}
