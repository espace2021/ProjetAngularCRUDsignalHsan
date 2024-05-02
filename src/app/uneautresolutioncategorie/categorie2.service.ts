import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, inject,signal  } from '@angular/core';
import { Categorie } from '../categories/categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Categorie2Service {

  public http = inject(HttpClient);
  public url = 'http://localhost:3001/api/categories';
    categories = signal<Categorie[]>([]);

    getCategories():any{
    return this.http.get<Categorie[]>(this.url).subscribe(data => { 
     return data
   })
      
      
  }

  public getAll():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.url)
  }

  async getallcategories() {
    return  await fetch(this.url).then(res=>res.json())

  }

  deleteCategory(category: Categorie) {
    this.http.delete<Categorie>(this.url + '/' + category._id)
    .subscribe(data => {
     
      return this.categories.update(categories => categories.filter(t => t._id !== category._id));
    })
    
  }

  
  
    createCategory(category: Categorie) {
      return this.http.post(this.url+'/' , category).subscribe(((data: any)=>{
          
        this.categories.set([data,...this.categories()]);
     
        }))
      }
  
      updateCategory(category: Categorie) {
        this.http.put(this.url+ '/' + category._id, category)
        .subscribe(data => {
          console.log(data);
        return this.categories.update(categories => {
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
