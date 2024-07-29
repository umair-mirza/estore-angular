import { Component } from '@angular/core';
import { ProductStoreItem } from '../../services/product/products.storeItem';

@Component({
  selector: 'app-products-gallery',
  templateUrl: './products-gallery.component.html',
  styleUrl: './products-gallery.component.scss',
})
export class ProductsGalleryComponent {
  constructor(private productsStoreItem: ProductStoreItem) {}

  onSelectSubCategory(subCategoryId: number): void {
    this.productsStoreItem.loadProducts('subCategoryId=' + subCategoryId);
  }
}
