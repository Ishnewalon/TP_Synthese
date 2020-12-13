import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { FormulaireService } from '../services/formulaire.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  orderForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    orderChoice: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    delivery: new FormControl('', Validators.required),
  });

  order: Order;
  validMessage: string = "";

  constructor(private service: FormulaireService, private router: Router) { }

  ngOnInit(): void {
  }

  get myForm(){
    return this.orderForm.controls;
  }

  onSubmit(){
      if(this.orderForm.valid) {
        this.validMessage="";
        this.service.post(this.orderForm.value).subscribe(data => {
          this.orderForm.reset();
          this.router.navigateByUrl('/crud');
        })
      }
      else {
        this.validMessage="Order must be filled out before being sent";
      }
  }

  cancel(){
    this.orderForm.reset();
    this.router.navigateByUrl('/home');
  }
}
