import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../../models/order';
import { FormulaireService } from '../../services/formulaire.service';

@Component({
  selector: 'app-read-one',
  templateUrl: './read-one.component.html',
  styleUrls: ['./read-one.component.css']
})
export class ReadOneComponent implements OnInit {

  id:number;
  order: Order;
  updateOrderForm: FormGroup;

  constructor(private service: FormulaireService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.findByID(this.id).subscribe(data => {
      this.order = data;
    }, (err) => {
      console.log(err);
    });

    this.updateOrderForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      orderChoice: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      delivery: new FormControl('', Validators.required),
      message: new FormControl('')
    });
  }

}
