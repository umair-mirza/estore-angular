import { Component, EventEmitter, Output } from '@angular/core';
import {
  faSearch,
  faShoppingCart,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';
import { Searchkeyword } from '../../types/searchKeyword.type';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CartStoreItem } from '../../services/cart/cart.storeItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faShoppingCart = faShoppingCart;

  @Output()
  searchClicked: EventEmitter<Searchkeyword> =
    new EventEmitter<Searchkeyword>();

  displaySearch: boolean = true;

  constructor(
    public categoryStore: CategoriesStoreItem,
    private router: Router,
    public cartStore: CartStoreItem
  ) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.displaySearch =
          (event as NavigationEnd).url === '/home/products' ? true : false;
      });
  }

  onClickSearch(keyword: string, categoryId: string) {
    this.searchClicked.emit({
      categoryId: parseInt(categoryId),
      keyword: keyword,
    });
  }
}
