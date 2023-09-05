import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipes } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipes[] = [];
  // @Output() recipeWasSelect = new EventEmitter<Recipes>();
  // recipes: Recipes[] = [
  //   new Recipes('A Test', 'Test', 'https://picsum.photos/200'),
  //   new Recipes('Another Test', 'Another Test', 'https://picsum.photos/200'),
  // ];
  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }

  // onRecipe(recipe: Recipes) {
  //   this.recipeWasSelect.emit(recipe);
  // }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
