import { Component,Input,inject, signal } from '@angular/core';
import { Categorie } from '../../categories/categorie';
import { Categorie2Service } from '../categorie2.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modifcategorie2',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './modifcategorie2.component.html',
  styleUrl: './modifcategorie2.component.css'
})
export class Modifcategorie2Component {
  @Input() catId: object | undefined; 

  display = "none";

 
 category=signal<Categorie>({})

  public categorieService = inject(Categorie2Service);
 
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
