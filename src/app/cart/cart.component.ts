import { Component, effect, inject, signal } from '@angular/core';
import { DecimalPipe, NgFor, NgIf } from '@angular/common';

import { CartService } from '../services/cart.service';
import { CartItem } from './cart';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DecimalPipe, NgIf, NgFor, FormsModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  pageTitle = 'Cart';

  
  cartService = inject(CartService);

  // Expose the values from the service
  cartItems = this.cartService.cartItems;
  subTotal = this.cartService.subTotal;
  deliveryFee = this.cartService.deliveryFee;
  tax = this.cartService.tax;
  totalPrice = this.cartService.totalPrice;

  // Example of an effect
  x = effect(() => console.log("Cart Items:", this.cartItems()));

  onQuantitySelected(item: CartItem, qty: number) {
    this.cartService.updateInCart(item, qty);
  }

  removeFromCart(item: CartItem) {
    this.cartService.removeFromCart(item);
  }
}
