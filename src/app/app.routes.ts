import { Routes } from '@angular/router';
import {ViewcategoriesComponent} from './categories/viewcategories/viewcategories.component';

export const routes: Routes = [

  {
    path: 'viewcategories',
    pathMatch: 'full',
    component: ViewcategoriesComponent,
  },
   
];
