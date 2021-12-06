import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts() : Observable<Product[]>{
   const url ="https://fakestoreapi.com/products";
  return  this.httpClient.get<Product[]>(url);
 }
}
