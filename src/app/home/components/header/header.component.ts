import { Component } from '@angular/core';
import {
  faSearch,
  faShoppingCart,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faShoppingCart = faShoppingCart;

  constructor(public categoryStore: CategoriesStoreItem) {}
}
