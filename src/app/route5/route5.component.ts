import { Component, OnInit } from '@angular/core';
import { Employee } from './model/employee';
import { EmployeeService } from './service/employee.serive';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.scss'],
  providers:[EmployeeService]
})
export class Route5Component implements OnInit {
  employess: Employee[] =[];
  isAscendingSort = false;

  constructor( private employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.employeeService.getEmployees().subscribe((employees:any)=> {
      this.employess = employees.data;
    });
  }

  sort( key:any){
    this.isAscendingSort = !this.isAscendingSort;
    switch (key) {
      case "age":
        {
          this.employess =  this.isAscendingSort ? this.employess.sort((low, high) => low.employee_age - high.employee_age): this.employess.sort((low, high) => high.employee_age - low.employee_age);
          break;
        }

      case "salary":
        {
          this.employess = this.isAscendingSort ?  this.employess.sort((low, high) => high.employee_salary - low.employee_salary) :  this.employess.sort((low, high) => low.employee_salary - high.employee_salary);
          break;
        }

      case "name":
        {
          this.employess = this.employess.sort( (low, high)=> {
            if (low.employee_name < high.employee_name) {
              return  this.isAscendingSort ?  -1: 1;
            }
            else if (low.employee_name > high.employee_name) {
              return  this.isAscendingSort? 1: -1;
            }
            else {
              return 0;
            }
          })
          break;
        }

   }
  }

}
