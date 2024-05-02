import { Component,  inject, signal } from '@angular/core';
import { Categorie} from '../../categories/categorie';
import { Categorie2Service } from '../categorie2.service';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-categorie2add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './categorie2add.component.html',
  styleUrl: './categorie2add.component.css'
})
export class Categorie2addComponent {
  
  display = "none";

   newcategory=signal<Categorie>({})
   public categorieService = inject(Categorie2Service);
  
  
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
