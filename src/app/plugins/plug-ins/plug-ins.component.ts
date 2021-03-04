import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plug-ins',
  templateUrl: './plug-ins.component.html',
  styleUrls: ['./plug-ins.component.css']
})
export class PlugInsComponent implements OnInit {

  listOfPlugins = [
    {
      identifier: 'asdfghjkl',
      title: 'Fight Plugin',
      description: 'Fight plugin'
    },
    {
      identifier: 'cbvcbcvbcvbcv',
      title: 'Quiz Plugin',
      description: 'Quiz plugin'
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
