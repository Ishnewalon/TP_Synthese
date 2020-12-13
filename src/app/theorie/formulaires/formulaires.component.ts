import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User} from './../user';

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.css']
})
export class FormulairesComponent implements OnInit {

user: User ={
  name: '',
  password: '',
  emailOffers: false,
  interfaceStyle: '',
  subscriptionType: '',
  notes: ''
}

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form1: NgForm) {
    console.log('Data recu : ', form1.valid);
    console.log(form1.value);
  }
}
