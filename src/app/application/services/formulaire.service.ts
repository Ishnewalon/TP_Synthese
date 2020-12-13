import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService extends GenericService<Order, number>{

  constructor(http: HttpClient) {
    super(http, "http://localhost:3008/myApi");
   }
}
