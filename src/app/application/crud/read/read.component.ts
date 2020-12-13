import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { FormulaireService } from '../../services/formulaire.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

listOrder: Array<Order>;
public headElements = ['Id', 'Name', 'Phone', 'Address', 'OrderChoice', 'Color', 'Delivery', 'Opérations'];

  constructor(private service: FormulaireService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(): void {
    this.service.findAll().subscribe(data => {
      this.listOrder = data;
    }, (err) => {
      console.log(err);
    });
  }

  public delete(id: number, i: any){
    if(window.confirm("Warning! About to cancel an order!")){
      this.service.deleteById(id).subscribe(() =>{
        this.listOrder.splice(i,1);
      }, (err) => {
        console.log(err);
      });
    }
  }
}


