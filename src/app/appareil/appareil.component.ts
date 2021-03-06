import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/apareil.service';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    if(this.appareilStatus == 'allumé'){
      return 'green';
    }
    else if(this.appareilStatus == 'éteint'){
      return 'red';
    }
  }

  onSwitch() {
    if(this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.id);
    } else if(this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.id);
    }
  }

}
