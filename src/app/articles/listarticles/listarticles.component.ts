import { Component, inject, signal } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../classes/article';
import { RouterLink } from '@angular/router';
import { AjoutarticleComponent } from '../ajoutarticle/ajoutarticle.component';
import {articles} from '../../store/store.signal'
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ModifarticleComponent } from "../modifarticle/modifarticle.component";


@Component({
    selector: 'app-listarticles',
    standalone: true,
    templateUrl: './listarticles.component.html',
    styleUrl: './listarticles.component.css',
    imports: [RouterLink, DataTablesModule, AjoutarticleComponent, CommonModule, TableModule, ButtonModule, ModifarticleComponent]
})
export class ListarticlesComponent {
  public articleservice = inject(ArticlesService);

  articles = signal<Article[]>([]);

   
 ngOnInit(): void {
   this.articleservice.getArticles()
   this.articles=articles

 }


 deleteArticle(article:Article):void {
  this.articleservice.deleteArticle(article)
}

applyFilterGlobal(dt:any,$event:any, stringVal:any) { 
  //convertir la cible de l'événement en HTMLInputElement et accéder à la valeur.
  // filterGlobal fonction prédéfinie de primeng on lui donne la valeur et le type de filtre ici c'est contains envoyé dans stringVal
  dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
}


}
