import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MealsService } from '../../../services/meals.service';
import { Meals } from '../../../interfaces/meals';
import { CommonModule } from '@angular/common';
import { MacrosChartComponent } from "../macros-chart/macros-chart.component";

@Component({
  selector: 'app-meal-statistics',
  standalone: true,
  imports: [CommonModule, MacrosChartComponent],
  templateUrl: './meal-statistics.component.html',
  styleUrl: './meal-statistics.component.css'
})
export class MealStatisticsComponent implements OnInit, OnChanges {
  @Input() dateRecivedFromNT?: string | null; //meal DATE recibido de my-nutri-track
  meals: Meals[] = [{ id: '', idUser: '', date: '', breakfast: [], lunch: [], snack: [], dinner: [] }];
  totalCalories?: number;
  totalProteins?: number;
  totalFats?: number;
  totalCarbs?: number;

  constructor(private _myMealsService: MealsService) { }

  ngOnInit(): void {
    this.dateRecivedFromNT = localStorage.getItem('loginDate');

    this._myMealsService.getUserMealByDate(this.dateRecivedFromNT).subscribe(data => {
      this.meals = data;
      this.calculateCalories();
      this.calculateProteins();
      this.calculateFats();
      this.calculateCarbs();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._myMealsService.getUserMealByDate(this.dateRecivedFromNT).subscribe(data => {
      this.meals = data;
      this.calculateCalories();
      this.calculateProteins();
      this.calculateFats();
      this.calculateCarbs();
    });
  }

  calculateCalories() {
    this.totalCalories = 0
    if (this.meals.length > 0 && this.meals[0].breakfast) {
      for (let food of this.meals[0].breakfast) {
        this.totalCalories += food.caloriesPerGram * food.gramQuantity;
      }
    }

    if (this.meals.length > 0 && this.meals[0].lunch) {
      for (let food of this.meals[0].lunch) {
        this.totalCalories += food.caloriesPerGram * food.gramQuantity;
      }
    }

    if (this.meals.length > 0 && this.meals[0].snack) {
      for (let food of this.meals[0].snack) {
        this.totalCalories += food.caloriesPerGram * food.gramQuantity;
      }
    }

    if (this.meals.length > 0 && this.meals[0].dinner) {
      for (let food of this.meals[0].dinner) {
        this.totalCalories += food.caloriesPerGram * food.gramQuantity;
      }
    }
  }

  calculateProteins() {
    this.totalProteins = 0

    if (this.meals.length > 0 && this.meals[0].breakfast) {
      for (let food of this.meals[0].breakfast) {
        this.totalProteins += food.proteins * food.gramQuantity;
      }
    }

    if (this.meals.length > 0 && this.meals[0].lunch) {
      for (let food of this.meals[0].lunch) {
        this.totalProteins += food.proteins * food.gramQuantity;
      }
    }

    if (this.meals.length > 0 && this.meals[0].snack) {
      for (let food of this.meals[0].snack) {
        this.totalProteins += food.proteins * food.gramQuantity;
      }
    }

    if (this.meals.length > 0 && this.meals[0].dinner) {
      for (let food of this.meals[0].dinner) {
        this.totalProteins += food.proteins * food.gramQuantity;
      }
    }
  }

  calculateFats() {
    this.totalFats = 0

    if (this.meals.length > 0 && this.meals[0].breakfast) {
      for (let food of this.meals[0].breakfast) {
        this.totalFats += food.fats * food.gramQuantity;
      }
    }

    if (this.meals.length > 0 && this.meals[0].lunch) {
      for (let food of this.meals[0].lunch) {
        this.totalFats += food.fats * food.gramQuantity;
      }
    }

    if (this.meals.length > 0 && this.meals[0].snack) {
      for (let food of this.meals[0].snack) {
        this.totalFats += food.fats * food.gramQuantity;
      }
    }

    if (this.meals.length > 0 && this.meals[0].dinner) {
      for (let food of this.meals[0].dinner) {
        this.totalFats += food.fats * food.gramQuantity;
      }
    }
  }

  calculateCarbs() {
    this.totalCarbs = 0

    if (this.meals.length > 0 && this.meals[0].breakfast) {
      for (let food of this.meals[0].breakfast) {
        this.totalCarbs += food.carbohydrates * food.gramQuantity;
      }
    }

    if (this.meals.length > 0 && this.meals[0].lunch) {
      for (let food of this.meals[0].lunch) {
        this.totalCarbs += food.carbohydrates * food.gramQuantity;
      }
    }

    if (this.meals.length > 0 && this.meals[0].snack) {
      for (let food of this.meals[0].snack) {
        this.totalCarbs += food.carbohydrates * food.gramQuantity;
      }
    }

    if (this.meals.length > 0 && this.meals[0].dinner) {
      for (let food of this.meals[0].dinner) {
        this.totalCarbs += food.carbohydrates * food.gramQuantity;
      }
    }

  }

}
