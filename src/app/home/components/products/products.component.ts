import { Component } from '@angular/core';
import { ProductStoreItem } from '../../services/product/products.storeItem';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(public productsStore: ProductStoreItem) {}
}
