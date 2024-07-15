import { Injectable } from '@angular/core';
import { Category } from '../types/category.type';
import { categories } from '../sampleData/categories.data';

@Injectable({
  providedIn: 'root', //provide a singleton object of this service to the root of application
})
export class CategoryService {
  constructor() {}

  getAllCategories(): Category[] {
    return categories;
  }
}
