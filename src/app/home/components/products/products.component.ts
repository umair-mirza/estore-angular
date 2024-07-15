import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductListItem } from './products.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [ProductsService], //this indicated to Angular compiler that productService is a dependency of this component
})
export class ProductsComponent {
  products: ProductListItem[] = [];

  constructor(productsService: ProductsService) {
    this.products = productsService.getProductsList();
  }
}
