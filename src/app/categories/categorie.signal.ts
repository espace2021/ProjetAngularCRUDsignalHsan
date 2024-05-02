import { signal } from "@angular/core";
import { Categorie } from "./categorie";

export const categories=signal<Categorie[] | []>([]);