import { signal } from "@angular/core";
import { Article } from "../classes/article";

export const articles=signal<Article[] | []>([]);