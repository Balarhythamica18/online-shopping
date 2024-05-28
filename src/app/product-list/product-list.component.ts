import { Component } from '@angular/core';
import { Product } from './product.model';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  offerMessage: boolean = true;
  constructor(private router: Router, private cartService: CartService) {}

  viewCartVisible: boolean = false;
  itemAdded: boolean = false;

  products: Product[] = [
    { name: 'Mango', price: 250, quantity: 1, inStock: 10, addedToCart: false },
    { name: 'Banana', price: 80, quantity: 1, inStock: 15, addedToCart: false },
    { name: 'Red Banana', price: 120, quantity: 1, inStock: 0, addedToCart: false },
    { name: 'Kiwi', price: 95, quantity: 1, inStock: 8, addedToCart: false },
    { name: 'Red Dragon', price: 200, quantity: 1, inStock: 0, addedToCart: false },
    { name: 'Green Grapes', price: 50, quantity: 1, inStock: 20, addedToCart: false },
    { name: 'Strawberry', price: 300, quantity: 1, inStock: 3, addedToCart: false },
    { name: 'Orange', price: 60, quantity: 1, inStock: 0, addedToCart: false },
    { name: 'Lychee', price: 100, quantity: 1, inStock: 9, addedToCart: false },
    { name: 'Cherry', price: 250, quantity: 1, inStock: 20, addedToCart: false },
    { name: 'Pomogranate', price: 300, quantity: 1, inStock: 0, addedToCart: false },
    { name: 'Pine Apple', price: 80, quantity: 1, inStock: 20, addedToCart: false }
  ];

  filteredProducts: Product[] = [...this.products];
  showDiscountMessage: boolean = false;

  decrementProductQuantity(product: Product) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  incrementProductQuantity(product: Product) {
    if (product.quantity < product.inStock) {
      product.quantity++;
    }
  }

  addToCart(product: Product) {
    if (product.inStock > 0) {
      if (!product.addedToCart) {
        this.cartService.addToCart(product);
        this.itemAdded = true;
        setTimeout(() => {
          this.itemAdded = false;
        }, 2000);

        product.inStock--;
        product.addedToCart = true;

        const cartTotal = this.cartService.getCartTotal();
        if (cartTotal >= 1000) {
          this.showDiscountMessage = true;
        }
      } else {
        this.incrementProductQuantity(product);
      }
    }
  }

  viewCart() {
    this.viewCartVisible = true;
    this.router.navigate(['./view-cart']);
  }

  closeCart() {
    this.viewCartVisible = false;
  }

  onSearch(searchText: string) {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(searchText)
    );
  }
}
