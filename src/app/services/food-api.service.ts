import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../interfaces/food';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodApiService {

  baseUrl = "http://localhost:3000/foods/";

  constructor(private _httpService: HttpClient) { }


  // getFoods(foodName: string): Observable<Food[]> {
  //   const url = `${this.baseUrl}?name_like=${encodeURIComponent(foodName)}`;
  //   return this._httpService.get<Food[]>(url);
  // }

  getFoods(foodName: string): Observable<Food[]> {
    return this._httpService.get<Food[]>(this.baseUrl).pipe(
      map(foods => foods.filter(food => food.name.toLowerCase().includes(foodName.toLowerCase())))  // Filtra los alimentos por el nombre
    );
  }

  getFoodsByType(foodType: string): Observable<Food[]> {
    const url = `${this.baseUrl}?foodType_like=${encodeURIComponent(foodType)}`;
    return this._httpService.get<Food[]>(url);
  }
}
