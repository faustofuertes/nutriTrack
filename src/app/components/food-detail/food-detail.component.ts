import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Food } from '../../interfaces/food';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './food-detail.component.html',
  styleUrl: './food-detail.component.css'
})
export class FoodDetailComponent {
  @Input() foodRecived: Food = { id: 0, name: '', caloriesPerGram: 0, carbohydrates: 0, proteins: 0, fats: 0, gramQuantity: 0, foodType: '' };
  gramQuantity: number = 100;

  foodIcons: { [key: string]: string } = {
    fruits: "https://img.icons8.com/color/96/group-of-fruits.png",
    vegetables: "https://img.icons8.com/fluency/96/group-of-vegetables.png",
    grains: "https://img.icons8.com/external-icongeek26-flat-icongeek26/64/external-grains-agriculture-icongeek26-flat-icongeek26.png",
    proteins: "https://img.icons8.com/fluency/96/steak-medium.png",
    dairy: "https://img.icons8.com/color/96/milk-bottle.png",
    fatsAndOils: "https://img.icons8.com/color/96/olive-oil.png",
    sweetsAndDesserts: "https://img.icons8.com/color/96/dessert.png",
    beverages: "https://img.icons8.com/color-glass/48/soda-can.png",
    snacks: "https://img.icons8.com/color-glass/48/potato-chips.png",
    seafood: "https://img.icons8.com/color-glass/96/fish-skeleton.png",
    legumes: "https://img.icons8.com/color-glass/96/white-beans.png",
    nutsAndSeeds: "https://img.icons8.com/color-glass/96/ceshew.png"
  };

}
