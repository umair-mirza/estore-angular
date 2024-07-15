import { Injectable } from '@angular/core';
import { ProductListItem } from './products.type';
import { products } from './products.data';

@Injectable() //to be only used in the products component
export class ProductsService {
  constructor() {}

  getProductsList(): ProductListItem[] {
    return products;
  }
}
