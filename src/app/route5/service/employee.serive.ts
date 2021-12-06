import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getEmployees() : Observable<Employee[]>{
   const url ="http://dummy.restapiexample.com/api/v1/employees";
  return  this.httpClient.get<Employee[]>(url);
 }
}
