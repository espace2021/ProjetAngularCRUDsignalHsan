import { Component,inject, signal  } from '@angular/core';


import { CategoriesService } from '../categories.service';
import { Categorie } from '../categorie';

import { CommonModule } from '@angular/common';
import { ModifcategorieComponent } from "../modifcategorie/modifcategorie.component";


import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-categorie-list',
    standalone: true,
    templateUrl: './categorie-list.component.html',
    styleUrl: './categorie-list.component.css',
    imports: [CommonModule, ModifcategorieComponent,ButtonModule,TableModule]
})
export class CategorieListComponent {
[x: string]: any;

  public categorieService = inject(CategoriesService);

   categories = signal<Categorie[]>([]);
   
  ngOnInit():void {
  this.categories=this.categorieService.getCategories();
  
  }

  deleteCategory(category:Categorie):void {
    this.categorieService.deleteCategory(category)
    }

    applyFilterGlobal(dt:any,$event:any, stringVal:any) { 
      //convertir la cible de l'événement en HTMLInputElement et accéder à la valeur.
      // filterGlobal fonction prédéfinie de primeng on lui donne la valeur et le type de filtre ici c'est contains envoyé dans stringVal
      dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
    }
}
