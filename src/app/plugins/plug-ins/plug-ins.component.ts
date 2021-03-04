import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plug-ins',
  templateUrl: './plug-ins.component.html',
  styleUrls: ['./plug-ins.component.css']
})
export class PlugInsComponent implements OnInit {

  createPluginRoute = '/plugins/create';

  constructor() { }

  ngOnInit(): void {

  }

}
