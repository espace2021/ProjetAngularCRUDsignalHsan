import { Component } from '@angular/core';
import { ListcategoriesavecadComponent } from "../listcategoriesavecad/listcategoriesavecad.component";
import { CreatecategComponent } from "../createcateg/createcateg.component";

@Component({
    selector: 'app-viewcategoriesavecad',
    standalone: true,
    templateUrl: './viewcategoriesavecad.component.html',
    styleUrl: './viewcategoriesavecad.component.css',
    imports: [ListcategoriesavecadComponent, CreatecategComponent]
})
export class ViewcategoriesavecadComponent {

}
