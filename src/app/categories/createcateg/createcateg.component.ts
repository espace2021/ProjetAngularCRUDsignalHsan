import { Component,  inject, signal } from '@angular/core';
import { Categorie} from '../../classes/categorie';
import { CategoriesService } from '../../services/categories.service';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-createcateg',
    standalone: true,
    templateUrl: './createcateg.component.html',
    styleUrl: './createcateg.component.css',
    imports: [FormsModule, CommonModule]
})
export class CreatecategComponent {
  
  display = "none";

   newcategory=signal<Categorie>({})
   public categorieService = inject(CategoriesService);
  
  
  createCategory() { 
    this.categorieService.createCategory(this.newcategory());
    this.closeModal()
    
   }

openModal() { 
    this.display = "block";
}

closeModal() {
 this.display = "none";
 this.newcategory.set({});
}

}