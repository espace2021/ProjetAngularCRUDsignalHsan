import { Article } from "../classes/article";

export interface Cart {
  cartItems: CartItem[]
}

export interface CartItem {
  article: Article;
  quantity: number;
}
