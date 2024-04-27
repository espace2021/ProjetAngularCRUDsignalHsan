import { Component,inject, signal  } from '@angular/core';


import { CategoriesService } from '../categories.service';
import { Categorie } from '../categorie';

import { CommonModule } from '@angular/common';
import { ModifcategorieComponent } from "../modifcategorie/modifcategorie.component";

import { DataTablesModule } from "angular-datatables";
import { Config } from 'datatables.net';

@Component({
    selector: 'app-categorie-list',
    standalone: true,
    templateUrl: './categorie-list.component.html',
    styleUrl: './categorie-list.component.css',
    imports: [CommonModule, ModifcategorieComponent,DataTablesModule]
})
export class CategorieListComponent {
  public categorieService = inject(CategoriesService);
   
  dtOptions: Config = {};

   categories = signal<Categorie[]>([]);
  ngOnInit(): void {
    this.categories=this.categorieService.getCategories();

    //datatable
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  deleteCategory(category:Categorie):void {
    this.categorieService.deleteCategory(category)
  }


  
  
}
