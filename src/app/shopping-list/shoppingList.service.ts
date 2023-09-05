import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../share/ingredients.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();

  private ingredients: Ingredients[] = [
    new Ingredients('Test Name', 100),
    new Ingredients('Apple', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    // ดักว่าถ้า ingredients เปลี่ยนไปให้ render ใหม่
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIng(ingredients: Ingredients[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
