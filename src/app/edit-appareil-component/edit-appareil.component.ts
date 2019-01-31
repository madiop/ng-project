import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/apareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = 'éteint';

  constructor(private appareilService: AppareilService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm){
    const name = myForm.value['name'];
    const status = myForm.value['status'];
    this.appareilService.addAppareil(name, status);
    this.router.navigate(['appareils']);
  }

}
