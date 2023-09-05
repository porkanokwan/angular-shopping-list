import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../../recipes.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css'],
})
export class RecipesItemComponent {
  @Input() recipeItem: Recipes;
  @Input() index: number;
  // @Output() recipeSelected = new EventEmitter<Recipes>();

  // onRecipeSelected() {
  //   this.recipeSelected.emit();
  // }

  // Use Service
  constructor(private recipesService: RecipesService) {}

  onRecipeSelected() {
    this.recipesService.recipeSelected.emit(this.recipeItem); // ส่ง this.recipeItem เพราะเป็นข้อมูลที่เราเลือกและต้องการส่ง
  }
}
