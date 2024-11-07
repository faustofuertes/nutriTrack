import { Component } from '@angular/core';
import { NavBarComponent } from "../../sharedComponents/nav-bar/nav-bar.component";
import { BarraBuscadoraComidasComponent } from "../../components/barra-buscadora-comidas/barra-buscadora-comidas.component";
import { FoodContainerComponent } from "../../components/food-container/food-container.component";
import { Food } from '../../interfaces/food';
import { FoodApiService } from '../../services/food-api.service';
import { FoodDetailComponent } from '../../components/food-detail/food-detail.component';
import { FoodTypeComponent } from "../../components/food/food-type/food-type.component";

@Component({
  selector: 'app-alimentos',
  standalone: true,
  imports: [NavBarComponent, BarraBuscadoraComidasComponent, FoodContainerComponent, FoodDetailComponent, FoodTypeComponent],
  templateUrl: './alimentos.component.html',
  styleUrl: './alimentos.component.css'
})
export class AlimentosComponent {
  foodNameRecived?: string;
  arrayFoods?: Food[];
  foodSelected: Food = { id: 0, name: '', caloriesPerGram: 0, carbohydrates: 0, proteins: 0, fats: 0, gramQuantity: 0, foodType: '' };
  allFood = true;
  oneFood = false;

  foodTypeSelected?: string;

  constructor(private _foodApi: FoodApiService) { }

  reciveFoodName(foodName: string) {
    this._foodApi.getFoods(foodName).subscribe(data => {
      this.arrayFoods = data;
    })
  }

  foodReciber(food: Food) {
    this.foodSelected = food;
    this.allFood = false;
    this.oneFood = true;
  }

  foodTypeReciver(foodType: string) {
    this._foodApi.getFoodsByType(foodType).subscribe(data => {
      this.arrayFoods = data;
    })
  }

  changeMode() {
    this.allFood = true;
    this.oneFood = false;
  }
}
