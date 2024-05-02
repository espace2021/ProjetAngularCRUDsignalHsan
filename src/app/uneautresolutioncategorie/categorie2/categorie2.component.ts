import { Component,Injector,Signal,WritableSignal,effect,inject, runInInjectionContext, signal  } from '@angular/core';
import { Categorie2Service } from '../categorie2.service';
import { Categorie } from '../../categories/categorie';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Modifcategorie2Component } from "../modifcategorie2/modifcategorie2.component"
import { from } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-categorie2',
  standalone: true,
  imports: [CommonModule, Modifcategorie2Component,ButtonModule,TableModule],
  templateUrl: './categorie2.component.html',
  styleUrl: './categorie2.component.css'
})
export class Categorie2Component {
  [x: string]: any;

  injector = inject(Injector);

  public categorieService = inject(Categorie2Service);

 
  categories = signal<Categorie[]>([]);
  
  ngOnInit() {
    this.categorieService.getAll().subscribe((data: any) =>{
      console.log(data)
      this.categories.set(data);
    })
  }

/*

categories : Signal<Categorie[]> = signal<Categorie[]>([]);
 
  ngOnInit() {
    const observable = from(this.categorieService.getallcategories());
    runInInjectionContext(this.injector, () => {
       this.categories = toSignal(observable,
         { initialValue: undefined });
       });

  }
*/
  // categories:Signal<Categorie[] | undefined> = signal([]);
   /* private _injector : Injector = inject(Injector);
  ngOnInit() : void {
   this.categories=toSignal(this.categorieService.getAll(), {injector : this._injector} )
  } */

  deleteCategory(category:Categorie):void {
    this.categorieService.deleteCategory(category)
    }

    applyFilterGlobal(dt:any,$event:any, stringVal:any) { 
      //convertir la cible de l'événement en HTMLInputElement et accéder à la valeur.
      // filterGlobal fonction prédéfinie de primeng on lui donne la valeur et le type de filtre ici c'est contains envoyé dans stringVal
      dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
    }

}
