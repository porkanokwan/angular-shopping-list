import { EventEmitter, Injectable } from '@angular/core';
import { Recipes } from './recipes.model';
import { Ingredients } from '../share/ingredients.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipes>();

  private recipes: Recipes[] = [
    new Recipes('A Test', 'Test', 'https://picsum.photos/200', [
      new Ingredients('Meat', 1),
      new Ingredients('Pork', 5),
    ]),
    new Recipes('Another Test', 'Another Test', 'https://picsum.photos/200', [
      new Ingredients('Bread', 2),
      new Ingredients('Pork', 1),
    ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // ส่ง array ตัวใหม่เข้าไปแทน เพื่อป้องกันไม่ให้เข้าถึง recipes แล้วเปลี่ยนแปลงค่าด้านในได้
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addIngredientToShoppingList(ingredient: Ingredients[]) {
    this.shoppingListService.addIng(ingredient);
  }
}
