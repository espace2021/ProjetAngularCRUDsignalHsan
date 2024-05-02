import { Component } from '@angular/core';
import { Categorie2Component } from "../categorie2/categorie2.component";
import { Categorie2addComponent } from "../categorie2add/categorie2add.component";

@Component({
    selector: 'app-viewcategorie2',
    standalone: true,
    templateUrl: './viewcategorie2.component.html',
    styleUrl: './viewcategorie2.component.css',
    imports: [Categorie2Component, Categorie2addComponent]
})
export class Viewcategorie2Component {

}
