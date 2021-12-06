import { Component, OnInit } from '@angular/core';
import { Product } from './model/products';
import { ProductsService } from './service/products.service';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss'],
  providers:[ProductsService]
})
export class Route2Component implements OnInit {
  products: Product[] = [];
  viewType = true;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products: Product[])=> {
      console.log("res",products);
      this.products =products;
      this.products = this.products.sort((low, high) => low.price - high.price);
    });
  }
  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.products = this.products.sort((low, high) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.products = this.products.sort((low, high) => high.price - low.price);
          break;
        }
      }
  }

}
