import { Component } from '@angular/core';
import { Category } from '../../types/category.type';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.scss',
})
export class SidenavigationComponent {
  categories: Category[] = [];

  //Inject the cateogry service in the constructor
  constructor(categoryService: CategoryService) {
    categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories?.filter((category) =>
      parentCategoryId
        ? category?.parent_category_id === parentCategoryId
        : category?.parent_category_id === null
    );
  }
}
