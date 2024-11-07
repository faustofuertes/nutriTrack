import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-food-type',
  standalone: true,
  imports: [],
  templateUrl: './food-type.component.html',
  styleUrl: './food-type.component.css'
})
export class FoodTypeComponent {
  @Output() typeFoodEmitter = new EventEmitter();

  emitFoodType(foodType: string) {
    this.typeFoodEmitter.emit(foodType);
  }
}
