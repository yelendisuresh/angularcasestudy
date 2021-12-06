import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((users: any) => {
        let newUser = []
        newUser = users.map((data: any) => {
          return {
            'Name': data['name'],
            'Class': Math.floor(Math.random() * 10) + 1,
            'Section': String.fromCharCode(Math.floor(Math.random() * 25) + 65),
            'Math': Math.floor(Math.random() * (50)) + 50,
            'Science': Math.floor(Math.random() * 50) + 50,
            'Computer': Math.floor(Math.random() * 50) + 50,
            'English': Math.floor(Math.random() * 50) + 50,
            'Hindi': Math.floor(Math.random() * 50) + 50,

          }


        })
        console.log(newUser)
        return newUser;
      }
      ))
  }
}
