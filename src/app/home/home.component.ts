import { Component } from '@angular/core';
import { CategoriesStoreItem } from './services/category/categories.storeItem';
import { ProductStoreItem } from './services/product/products.storeItem';
import { Searchkeyword } from './types/searchKeyword.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private categoriesStoreItem: CategoriesStoreItem,
    private productsStoreItem: ProductStoreItem
  ) {
    this.categoriesStoreItem.loadCategories();
    this.productsStoreItem.loadProducts();
  }

  onSelectCategory(categoryId: number): void {
    this.productsStoreItem.loadProducts('mainCategoryId=' + categoryId);
  }

  onSearchKeyword(searchKeyword: Searchkeyword): void {
    this.productsStoreItem.loadProducts(
      'mainCategoryId=' +
        searchKeyword.categoryId +
        '&keyword=' +
        searchKeyword.keyword
    );
  }
}
