import { Component } from '@angular/core';
import { CategorieListComponent } from "../categorie-list/categorie-list.component";
import { CreatecategComponent } from "../createcateg/createcateg.component";

@Component({
    selector: 'app-viewcategories',
    standalone: true,
    templateUrl: './viewcategories.component.html',
    styleUrl: './viewcategories.component.css',
    imports: [CategorieListComponent, CreatecategComponent]
})
export class ViewcategoriesComponent {

}
