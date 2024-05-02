import { Routes } from '@angular/router';
import {ViewcategoriesComponent} from './categories/viewcategories/viewcategories.component';
import {ViewcategoriesavecadComponent} from './categories/viewcategoriesavecad/viewcategoriesavecad.component';
import {Viewcategorie2Component} from './uneautresolutioncategorie/viewcategorie2/viewcategorie2.component'

export const routes: Routes = [

  {
    path: 'viewcategories',
    pathMatch: 'full',
    component: ViewcategoriesComponent,
  },
  {
    path: 'viewcategoriesavecad',
    pathMatch: 'full',
    component: ViewcategoriesavecadComponent,
  },
  {
    path: 'uneautresolutioncategorie',
    pathMatch: 'full',
    component: Viewcategorie2Component,
  },
];
