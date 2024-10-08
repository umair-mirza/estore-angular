import { Injectable } from '@angular/core';
import { Product } from '../../types/products.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable() //to be only used in the products component
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(query?: string): Observable<Product[]> {
    let url: string = 'http://localhost:5001/products';
    if (query) {
      url += '?' + query;
    }
    return this.httpClient.get<Product[]>(url);
  }

  getProduct(id: number): Observable<Product[]> {
    const url = 'http://localhost:5001/products/' + id;
    return this.httpClient.get<Product[]>(url);
  }
}
