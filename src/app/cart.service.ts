import { Injectable } from '@angular/core';
import { Product } from './product-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private cartTotal: number = 0;

  setCart(cart: Product[]) {
    this.cart = cart;
  }

  getCart(): Product[] {
    return this.cart;
  }

  setCartTotal(cartTotal: number) {
    this.cartTotal = cartTotal;
  }

  getCartTotal(): number {
    return Math.round(this.cartTotal);
  }

  addToCart(product: Product) {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.cart.push({ ...product });
    }
    this.cartTotal += product.price * product.quantity;
    if (this.cartTotal > 1000) {
      this.cartTotal /= 2;
    }
    this.cartTotal = Math.round(this.cartTotal);
  }

  removeFromCart(product: Product) {
    const productIndex = this.cart.findIndex(item => item.name === product.name);
    if (productIndex > -1) {
      const productToRemove = this.cart[productIndex];
      this.cartTotal -= productToRemove.price * productToRemove.quantity;
      this.cart.splice(productIndex, 1);
      this.cartTotal = Math.round(this.cartTotal);
    }
  }

  clearCart() {
    this.cart = [];
    this.cartTotal = 0;
  }

  incrementProductQuantity(product: Product) {
    const item = this.cart.find(p => p.name === product.name);
    if (item && item.quantity < item.inStock) {
      item.quantity++;
      this.cartTotal += item.price;
      this.cartTotal = Math.round(this.cartTotal);
    }
  }

  decrementProductQuantity(product: Product) {
    const item = this.cart.find(p => p.name === product.name);
    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
        this.cartTotal -= item.price;
      } else {
        this.removeFromCart(product);
      }
      this.cartTotal = Math.round(this.cartTotal);
    }
  }
}
