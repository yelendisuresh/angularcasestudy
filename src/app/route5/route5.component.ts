import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/employee.serive';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.scss'],
  providers:[EmployeeService]
})
export class Route5Component implements OnInit {
  userData:  Array<any> = [];
  originalUserOrder: Array<any> = [];
  headings: Array<any> = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getUsers().subscribe((res)=>{
      this.userData = res.slice();
      this.originalUserOrder = res.slice();
      this.headings = Object.keys(this.userData[0]).map(data=>{
        return {'headingName': data, count: 0}
      });
    }, 
    
      (err)=>{
        console.log('Something Went Wrong')
      })
  }

  // custom sort original order
  orderOriginal  = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

  sortTableData(name: string, index: number){
    switch(name){
      case 'Name':
        if(this.headings[index].count == 0)
          {
            this.userData = this.userData.sort((a, b)=> (a.Name) > (b.Name)  ? 1 : -1 )
            this.headings[index].count += 1
          }
        else if(this.headings[index].count == 1)
          {
            this.userData = this.userData.sort((a, b)=> (a.Name) < (b.Name)  ? 1 : -1 )
            this.headings[index].count += 1

          }
          else{
            this.headings[index].count = 0;
            this.userData = this.originalUserOrder.slice();
          }
        
        break;
      case 'Section':
        if(this.headings[index].count == 0)
        {
          this.userData = this.userData.sort((a, b)=> (a.Section) > (b.Section)  ? 1 : -1 )
          this.headings[index].count += 1
        }
      else if(this.headings[index].count == 1)
        {
          this.userData = this.userData.sort((a, b)=> (a.Section) < (b.Section)  ? 1 : -1 )
          this.headings[index].count += 1

        }
        else{
          this.headings[index].count = 0;
          this.userData = this.originalUserOrder.slice();
        }
        break;
      default:
        let key = this.headings[index].headingName
        if(this.headings[index].count == 0) {
          this.userData = this.userData.sort((a, b)=> (a[key]) - (b[key])  )
          this.headings[index].count += 1
        }
      else if(this.headings[index].count == 1)
        {
          this.userData = this.userData.sort((a, b)=> (b[key]) - (a[key]) )
          this.headings[index].count += 1

        }
        else{
          this.headings[index].count = 0
          this.userData = this.originalUserOrder.slice();
        }
    }

  }

}
