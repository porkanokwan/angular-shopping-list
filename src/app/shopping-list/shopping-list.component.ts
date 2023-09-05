import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../share/ingredients.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [];
  // ingredients: Ingredients[] = [
  //   new Ingredients('Test Name', 100),
  //   new Ingredients('Apple', 10),
  // ];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredientArr: Ingredients[]) => {
        this.ingredients = ingredientArr;
      }
    );
  }

  // onAddShoppingList(item: Ingredients) {
  //   this.ingredients.push(item);
  // }

  // onDeleteShopping(item: any) {
  //   console.log(item);
  // }
}
