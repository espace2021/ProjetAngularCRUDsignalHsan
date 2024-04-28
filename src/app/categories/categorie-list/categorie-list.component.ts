import { Component,ViewChild,inject, signal  } from '@angular/core';


import { CategoriesService } from '../categories.service';
import { Categorie } from '../categorie';

import { CommonModule } from '@angular/common';
import { ModifcategorieComponent } from "../modifcategorie/modifcategorie.component";

import { MatTableDataSource, MatTableModule } from  '@angular/material/table';

import { MatPaginatorModule } from  '@angular/material/paginator';

import { MatPaginator } from '@angular/material/paginator';


@Component({
    selector: 'app-categorie-list',
    standalone: true,
    templateUrl: './categorie-list.component.html',
    styleUrl: './categorie-list.component.css',
    imports: [CommonModule, ModifcategorieComponent,MatTableModule,MatPaginatorModule,MatPaginator]
})
export class CategorieListComponent {

  public categorieService = inject(CategoriesService);

  @ViewChild(MatPaginator, { static:  true }) paginator!: MatPaginator;
 
  columns: string[] = ['imagecategorie','nomcategorie','_id'];

   categories = signal<Categorie[]>([]);
   
   categ:any
    
 ngOnInit():void {
  this.categories=this.categorieService.getCategories();
  
  this.categ= new MatTableDataSource <any>(this.categories());
  this.categ.paginator = this.paginator;
  }

  deleteCategory(category:Categorie):void {
    this.categorieService.deleteCategory(category)
    }

}
