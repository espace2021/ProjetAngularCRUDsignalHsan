import { Component,Input,inject, signal } from '@angular/core';
import { Categorie } from '../categorie';
import { CategoriesService } from '../categories.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modifcategorie',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './modifcategorie.component.html',
  styleUrl: './modifcategorie.component.css'
})
export class ModifcategorieComponent {

  @Input() catId: object | undefined; 

  display = "none";

 
 category=signal<Categorie>({})

  public categorieService = inject(CategoriesService);
 
  ngOnInit(){
  console.log(this.catId);
   this.categorieService.findCategory(this.catId).subscribe(data => {
    this.category.set(data);
    
  });
   }

  
 
  modifCategory() { 
   this.categorieService.updateCategory(this.category());
   this.closeModal()
  }

openModal() { 
   this.display = "block";
}

closeModal() {
this.display = "none";

}
}
