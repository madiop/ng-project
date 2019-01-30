import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/apareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appareils: any[];

  constructor(private appareilService: AppareilService) {
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }
 
  onAllumer(){
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

}
