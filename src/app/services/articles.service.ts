import { Injectable,inject,signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../classes/article';

import {articles} from '../store/store.signal'

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  public http = inject(HttpClient);
  public url = 'http://localhost:3001/api/articles';


  constructor() { }

  getArticles(){
    this.http.get<Article[]>(this.url).subscribe({ 
      next: (data:any) => {console.log(data);articles.set(data)},
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => {console.log('Observable emitted the complete operation');}
  })  

  }
      
   

  deleteArticle(article: Article) {
    this.http.delete<Article>(this.url + '/' + article._id)
    .subscribe(data => {
     
      return articles.update((articles: any[]) => articles.filter(art => art._id !== article._id));
    })
    
  }
  
  createArticle(article: Article) {
      return this.http.post(this.url+'/' , article).subscribe(((data: any)=>{
          
        articles.set([data,...articles()]);
        }))
      }
  
      updateArticle(article: Article) {
        this.http.put(this.url+ '/' + article._id, article)
        .subscribe(data => {
         
        return articles.update((articles: any[]) => {
          const index = articles.findIndex(a => a._id === article._id);
          articles[index] = article;
          return articles;
        });
      })
      }

      findArticle(_id:object | undefined) {

        return this.http.get(this.url + '/' +  _id)
           }
     
}
