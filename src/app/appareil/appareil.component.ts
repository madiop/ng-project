import { Component, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  
  appareilName: string = 'Fer à repasser';
  appareilStatus: string = 'éteint';

  constructor() { }

  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus;
  }

}
