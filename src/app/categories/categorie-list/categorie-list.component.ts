import { Component,inject, signal  } from '@angular/core';


import { CategoriesService } from '../categories.service';
import { Categorie } from '../categorie';

import { CommonModule } from '@angular/common';
import { ModifcategorieComponent } from "../modifcategorie/modifcategorie.component";


@Component({
    selector: 'app-categorie-list',
    standalone: true,
    templateUrl: './categorie-list.component.html',
    styleUrl: './categorie-list.component.css',
    imports: [CommonModule, ModifcategorieComponent]
})
export class CategorieListComponent {
  public categorieService = inject(CategoriesService);
 
    categories = signal<Categorie[]>([]);
  ngOnInit(): void {
    this.categories=this.categorieService.getCategories();
   
  }

  deleteCategory(category:Categorie):void {
    this.categorieService.deleteCategory(category)
  }

}
