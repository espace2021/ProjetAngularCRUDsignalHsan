import { signal } from "@angular/core";
import { Article } from "../classes/article";
import { Categorie } from "../classes/categorie";

export const articles=signal<Article[] | []>([]);
export const categories=signal<Categorie[] | []>([]);