import {
  Component,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredients } from 'src/app/share/ingredients.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') newNameInput: ElementRef;
  @ViewChild('amountInput') newAmountInput: ElementRef;

  // @Output() addnewShopping = new EventEmitter<Ingredients>();
  // @Output() deleteShopping = new EventEmitter<number>();

  // onAdd() {
  //   // this.addnewShopping.emit({
  //   //   name: this.newNameInput.nativeElement.value,
  //   //   amount: this.newAmountInput.nativeElement.value,
  //   // });

  //   // เฉลย
  //   const ingName = this.newNameInput.nativeElement.value;
  //   const ingAmount = this.newAmountInput.nativeElement.value;
  //   const newIngredient = new Ingredients(ingName, ingAmount);
  //   this.addnewShopping.emit(newIngredient);
  // }

  // onDelete() {
  //   this.deleteShopping.emit();
  // }

  // onClear() {
  //   this.newNameInput.nativeElement.value = '';
  //   this.newAmountInput.nativeElement.value = '';
  // }

  // Use Service
  constructor(private shoppingListService: ShoppingListService) {}

  onAdd() {
    this.shoppingListService.addIngredient({
      name: this.newNameInput.nativeElement.value,
      amount: this.newAmountInput.nativeElement.value,
    });
  }

  onDelete() {}

  onClear() {
    this.newNameInput.nativeElement.value = '';
    this.newAmountInput.nativeElement.value = '';
  }
}
