import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends GenericService<Employee, Number> {

  constructor(http: HttpClient) {super(http, "");
 }
}
