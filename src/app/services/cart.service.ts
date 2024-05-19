import { computed, effect, inject, Injectable, Injector, runInInjectionContext, signal } from '@angular/core';
import { Article } from '../classes/article';
import { CartItem } from '../cart/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {

    injector = inject(Injector);

 // State exposed by the service
 cartItems = signal<CartItem[]>([]);

  constructor(){
      let data = localStorage.getItem('myCart');
      this.cartItems.set(data ? JSON.parse(data) : [])
    }
  
//update localStorage
updateLocalStorage() {
    runInInjectionContext(this.injector, () => {
    effect(() =>{
      localStorage.setItem('myCart', JSON.stringify(this.cartItems()))
      console.log(localStorage.getItem('myCart'))
       })
    });
}

   // Total up the extended price for each item
  subTotal = computed(() =>
    this.cartItems().reduce(
      (a, b) => a + b.quantity * Number(b.article.prix),
      0
    )
  );

  // Delivery is free if spending more than 100,000 credits
  deliveryFee = computed(() => (this.subTotal() < 100000 ? 999 : 0));

  // Tax could be based on shipping address zip code
  tax = computed(() => Math.round(this.subTotal() * 10.75) / 100);

  // Total price
  totalPrice = computed(
    () => this.subTotal() + this.deliveryFee() + this.tax()
  );

    // Total items
    totalItems = computed(
      () => this.cartItems().length
    );

  // Add the article to the cart
  addToCart(article: Article): void {

      // Check if the article is already in the cart
    const cartItem = this.cartItems().find(
      (v) => v.article._id === article._id
    );
    if (cartItem) {
      // Update the quantity
      this.updateInCart(cartItem, cartItem.quantity + 1);
     } else {
      // Add the article to the cart
      // Use update and not mutate because it's replacing the array, not modifying an element
      this.cartItems.update((items) => [...items, { article, quantity: 1 }]);
    }
  this.updateLocalStorage()
  
  }

  // Remove the item from the cart
  removeFromCart(cartItem: CartItem): void {
    // Use update and not mutate because it's replacing the array, not updating an element
    this.cartItems.update((items) =>
      items.filter((i) => i.article._id !== cartItem.article._id)
    );
    this.updateLocalStorage()
  }

  updateInCart(cartItem: CartItem, quantity: number) {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.article._id === cartItem.article._id
          ? { article: cartItem.article, quantity }
          : item
      )
    );
    this.updateLocalStorage()
  }

  clearAllCart(){
    this.cartItems.set([])
    localStorage.setItem('myCart','')
  }
}