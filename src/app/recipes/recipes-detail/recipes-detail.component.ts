import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipes } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css'],
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipeDetail: Recipes;
  id: number;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.recipeDetail = this.recipesService.getRecipeById(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipesService.addIngredientToShoppingList(
      this.recipeDetail.ingredients
    );
  }

  onEditRecipe() {
    // ใช้ได้หมดทุกวิธี
    // this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', +this.id, 'edit'], {
    //   relativeTo: this.route,
    // });
    this.router.navigate(['/recipes', +this.id, 'edit'], {
      relativeTo: this.route,
    });
  }

  onDeleteRecipe() {}
}
