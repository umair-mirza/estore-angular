import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/product/products.service';
import { Product } from '../../types/products.type';
import { Subscription } from 'rxjs';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartStoreItem } from '../../services/cart/cart.storeItem';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss',
})
export class ProductdetailsComponent implements OnInit {
  product: Product;
  subscriptions: Subscription = new Subscription(); //best practice for handling and destroying multiple subscriptions at once
  faShoppingCart = faShoppingCart;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private cart: CartStoreItem
  ) {}

  ngOnInit() {
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.subscriptions.add(
      this.productsService.getProduct(id).subscribe((product) => {
        this.product = product[0];
      })
    );
  }

  addToCart() {
    this.cart.addProduct(this.product);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
