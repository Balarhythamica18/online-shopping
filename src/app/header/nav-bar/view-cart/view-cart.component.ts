import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/product-list/product.model';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  cart: Product[] = [];
  cartTotal: number = 0;
  originalTotal: number = 0;
  discountedTotal: number = 0;
  showDiscountMessage: boolean = false;
  deliveryFee: number = 0;
  platformFee: number = 10; // Assuming platform fee is always Rs.10
  tip: number = 0; // Tip can be set dynamically based on user input
GSTcharges: number= 20;
selectedPayment: string | null = null;


  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.updateCart();
  }

  updateCart() {
    this.cart = this.cartService.getCart();
    this.originalTotal = this.cartService.getCartTotal();

    if (this.originalTotal > 1000) {
      this.discountedTotal = this.originalTotal / 2;
      this.cartTotal = this.discountedTotal + this.deliveryFee + this.platformFee + this.GSTcharges;
      this.showDiscountMessage = true;
    } else {
      this.cartTotal = this.originalTotal + this.deliveryFee + this.platformFee + this.GSTcharges;
      this.showDiscountMessage = false;
    }
  }



  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.updateCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.updateCart();
  }

  incrementQuantity(product: Product) {
    this.cartService.incrementProductQuantity(product);
    this.updateCart();
  }

  decrementQuantity(product: Product) {
    this.cartService.decrementProductQuantity(product);
    this.updateCart();
  }

  goToExplore() {
    this.router.navigate(['/product-list']);
  }
  proceed() {
    if (this.selectedPayment) {
      switch (this.selectedPayment) {
        case 'Google Pay':
          this.router.navigate(['/online-payment']);
          break;
        case 'Paypal':
          this.router.navigate(['/online-payment']);
          break;
        case 'Amazon Pay':
          this.router.navigate(['/online-payment']);
          break;
        case 'Pay On Delivery':
          this.router.navigate(['/cod']);
          break;
        default:
          alert('Please select a valid payment method.');
      }
    }
  }
}
