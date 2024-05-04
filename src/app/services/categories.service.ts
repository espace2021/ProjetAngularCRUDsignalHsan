import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Categorie } from '../classes/categorie';
import { Observable } from 'rxjs';
import {categories} from '../store/store.signal'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public http = inject(HttpClient);
  public url = 'http://localhost:3001/api/categories';
  

getCategories(){
     this.http.get<Categorie[]>(this.url).subscribe( data => { 
     categories.set(data);
   })      
    return categories;
   
  }

  public getAll():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.url)
  }
  

getCategoriesNext(){
     this.http.get<Categorie[]>(this.url).subscribe({ 
       next: (data:any) => {console.log(data);categories.set(data)},
       error: err => console.error('Observable emitted an error: ' + err),
       complete: () => {console.log('Observable emitted the complete operation');}
   })   
   
   
  }

 
  deleteCategory(category: Categorie) {
    this.http.delete<Categorie>(this.url + '/' + category._id)
    .subscribe(data => {
     
      return categories.update(categories => categories.filter(t => t._id !== category._id));
    })
    
  }

  
  
    createCategory(category: Categorie) {
      return this.http.post(this.url+'/' , category).subscribe(((data: any)=>{
          
        categories.set([data,...categories()]);
     
        }))
      }
  
      updateCategory(category: Categorie) {
        this.http.put(this.url+ '/' + category._id, category)
        .subscribe(data => {
          console.log(data);
        return categories.update(categories => {
          const index = categories.findIndex(t => t._id === category._id);
          categories[index] = category;
          return categories;
        });
      })
      }
    
      findCategory(_id:object | undefined) {

        return this.http.get(this.url + '/' +  _id)
           }

  constructor() { }
}
