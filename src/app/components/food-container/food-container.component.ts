import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Food } from '../../interfaces/food';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-food-container',
  standalone: true,
  imports: [CommonModule, FormsModule, CommonModule],
  templateUrl: './food-container.component.html',
  styleUrl: './food-container.component.css'
})
export class FoodContainerComponent {
  @Input() foodRecived: Food = { id: 0, name: '', caloriesPerGram: 0, carbohydrates: 0, proteins: 0, fats: 0, gramQuantity: 0, foodType: '' }; //comida recibida para renderizar
  @Output() foodClickEmitter = new EventEmitter(); //emisor de evento cuando se hace click en una comida
  @Input() flag?: boolean; //false = se renderizan las cals * 100 || true = se renderizan las calorias en base a los gramos

  emitFoodClick() {
    this.foodClickEmitter.emit(this.foodRecived);
  }
  isHighlighted = false;

  toggleHighlight() {
      this.isHighlighted = !this.isHighlighted;
  }
}
