import { Component, Input, inject, signal } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../classes/article';
import { FormsModule } from '@angular/forms';
import { Scategorie } from '../../classes/scategorie';
import { ScategoriesService } from '../../services/scategories.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-modifarticle',
  standalone: true,
  imports: [FormsModule,CommonModule],
 templateUrl: './modifarticle.component.html',
  styleUrl: './modifarticle.component.css'
})
export class ModifarticleComponent {
  display = "none";
  art=signal<Article>({})

  @Input() artId: object | undefined; 

  tabscat=signal<Scategorie[]>([])
  public articleService = inject(ArticlesService);
  scategorieService=inject(ScategoriesService)


 
  ngOnInit(){
    this.loadscategories()
    console.log(this.artId);
   this.articleService.findArticle(this.artId).subscribe(data => {
    this.art.set(data);
    
  });

    }
    
    loadscategories(){
      this.tabscat=this.scategorieService.getScategories();
      
      
    }

 modifArticle(){ 
   
    this.articleService.updateArticle(this.art())
    this.display = "none";

   
  }
  annuler(){
    this.display = "none";
 this.art.set({});
  }
  openModal() { 
    this.display = "block";
}

closeModal() {
  this.display = "none";
  this.art.set({});
}
}
