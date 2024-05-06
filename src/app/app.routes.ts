import { Routes } from '@angular/router';
import {ViewcategoriesComponent} from './categories/viewcategories/viewcategories.component';
import { ListarticlescardsComponent } from './articles/listarticlescards/listarticlescards.component';
import { CartComponent } from './cart/cart.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';

export const routes: Routes = [

  {
    path: 'viewcategories',
    pathMatch: 'full',
    component: ViewcategoriesComponent,
  },
  {
    path: 'articlesCards',
    pathMatch: 'full',
    component: ListarticlescardsComponent,
  },
  {
    path: 'cart',
    pathMatch: 'full',
    component: CartComponent,
  },
  { path: 'afficharticles', pathMatch: 'full', component: ListarticlesComponent } ,
];
