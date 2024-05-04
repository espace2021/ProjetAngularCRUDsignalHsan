import { Component,inject, signal  } from '@angular/core';


import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../classes/article'

import {articles} from '../../store/store.signal'
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-listarticlescards',
  standalone: true,
  imports: [],
  templateUrl: './listarticlescards.component.html',
  styleUrl: './listarticlescards.component.css'
})
export class ListarticlescardsComponent {

  public articleService = inject(ArticlesService);

  public cartService = inject(CartService);

 articles=signal<Article[] | []>([]);
  
  ngOnInit(){
    this.articleService.getArticles()
   this.articles=articles
 
  }

  addToCart(article: Article) {
    this.cartService.addToCart(article);
  }
}