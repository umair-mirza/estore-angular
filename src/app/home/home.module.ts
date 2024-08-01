import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './services/category/category.service';
import { CategoriesStoreItem } from './services/category/categories.storeItem';
import { ProductStoreItem } from './services/product/products.storeItem';
import { ProductsService } from './services/product/products.service';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-module.routing';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CatnavigationComponent,
    SidenavigationComponent,
    ProductsComponent,
    ProductsGalleryComponent,
    ProductdetailsComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    HomeRoutingModule,
  ],
  providers: [
    CategoryService,
    CategoriesStoreItem,
    ProductsService,
    ProductStoreItem,
  ],
})
export class HomeModule {}
