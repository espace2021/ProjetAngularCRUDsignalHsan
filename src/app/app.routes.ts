import { Routes } from '@angular/router';
import { CategorieListComponent } from './categories/categorie-list/categorie-list.component';
import { CreatecategComponent } from './categories/createcateg/createcateg.component';
import {ViewcategoriesComponent} from './categories/viewcategories/viewcategories.component';
import { ModifcategorieComponent } from './categories/modifcategorie/modifcategorie.component';

export const routes: Routes = [

  {
    path: 'viewcategories',
    pathMatch: 'full',
    component: ViewcategoriesComponent,
  },
    {
        path: 'categories',
        pathMatch: 'full',
        component: CategorieListComponent,
      },
      {
        path: 'createcategorie',
        pathMatch: 'full',
        component: CreatecategComponent,
      }
];
