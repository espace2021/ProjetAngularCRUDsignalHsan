
import { CategoriesService } from '../categories.service';
import { Categorie } from '../categorie';

import { CommonModule } from '@angular/common';
import { ModifcategorieComponent } from "../modifcategorie/modifcategorie.component";

import { DataTableDirective, DataTablesModule } from "angular-datatables";
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';

import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, effect, inject, signal } from '@angular/core';


@Component({
  selector: 'app-listcategoriesavecad',
  standalone: true,
  imports: [CommonModule, ModifcategorieComponent,DataTablesModule],
  templateUrl: './listcategoriesavecad.component.html',
  styleUrl: './listcategoriesavecad.component.css'
})
export class ListcategoriesavecadComponent implements AfterViewInit, OnDestroy, OnInit {

  public categorieService = inject(CategoriesService); 

  
    categories = signal<Categorie[]>([]); 
  modifcategorieComponent=ModifcategorieComponent;

   
  

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  dtOptions: Config = {};

  dtTrigger: Subject<any> = new Subject();

  ngOnInit(): void { 
    this.categories=this.categorieService.getCategories();
   
    this.dtOptions = {
      pagingType: 'full_numbers',
      serverSide: true, // Set the flag
      ajax: async (dataTablesParameters: any, callback) => {
        callback({
            recordsTotal: this.categories().length,
            recordsFiltered: this.categories().length,
            data:  this.categories()
        })
      },
      columns: [{
        title: 'Image',
        data: 'imagecategorie',
        render: (data: any, type: any, full: any) => {  
          return '<img src="'+data+'" alt="..." width="70" height="50"/>'

        },
      }, {
        title: 'Nom',
        data: 'nomcategorie'
      },
      {
        title: 'Update',
        data: '_id',
        render: (data: any, type: any, full: any) => { 
           return '<app-modifcategorie [catId]="' + data + '"/>';
          }
        },
        {
          title: 'Delete',
          data: '_id',
          render: (data: any,  full: any) => { 
             return '<button type="button" class="btn btn-default delete-button" data-id="' + data + '" (click)="deleteCategory(\'' + full + '\')" ><i class="bi bi-trash-fill" style="color:red"></i></button>';
            }
          },
         
       ]
    };
  }

  

  constructor() {  
    effect(() => {
     
      console.log(this.categories());
      console.log(this.dtElement)
      this.dtElement.dtInstance.then(dtInstance => {
        dtInstance.draw();
      });
  
    });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(null);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  deleteCategory(category:Categorie):void {
    this.categorieService.deleteCategory(category) 
}

}

