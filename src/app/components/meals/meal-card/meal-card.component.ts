import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Food } from '../../../interfaces/food';
import { FoodContainerComponent } from '../../food-container/food-container.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-meal-card',
  standalone: true,
  imports: [FoodContainerComponent, NgClass, NgIf],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.css'
})
export class MealCardComponent implements OnChanges {
  @Input() arrayFood?: Food[] = [{ id: 0, name: '', caloriesPerGram: 0, carbohydrates: 0, proteins: 0, fats: 0, gramQuantity: 0, foodType: '' }]; //array de comidas que renderiza
  @Output() deleteEmmiter = new EventEmitter(); //envia el evento del delete para meal list
  @Input() mealType?: 'breakfast' | 'lunch' | 'snack' | 'dinner'; //recibe el mealtype
  @Output() mealTypeEmitter = new EventEmitter(); //envia el mealType a meal list
  @Output() addModeEmmiter = new EventEmitter(); //envia el addMode event a meal list

  totalCalories: number = 0;
  isExpanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('cambio detectado')
    this.calculateCalories();
  }

  emitDelete(food: Food) {
    this.deleteEmmiter.emit(food);
  }

  emitMealType() {
    this.mealTypeEmitter.emit(this.mealType);
  }

  emitAddMode() {
    this.addModeEmmiter.emit();
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  calculateCalories() {
    if (this.arrayFood) {
      for (let food of this.arrayFood) {
        this.totalCalories += food.caloriesPerGram * food.gramQuantity;
      }
    }
  }

}
