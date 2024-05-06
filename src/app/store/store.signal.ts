import { signal } from "@angular/core";
import { Article } from "../classes/article";
import { Categorie } from "../classes/categorie";
import { Scategorie } from "../classes/scategorie";

export const articles=signal<Article[] | []>([]);
export const categories=signal<Categorie[] | []>([]);
export const scategories=signal<Scategorie[] | []>([]);