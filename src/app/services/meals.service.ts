import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, throwError } from 'rxjs';
import { Meals } from '../interfaces/meals';
import { Food } from '../interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  private userToken?: string | null;
  private currentDate?: string | undefined | null;
  private baseUrl = 'http://localhost:3000/meals'; //URL BASE 

  constructor(private _httpService: HttpClient) {
    this.userToken = localStorage.getItem('userToken');
    this.currentDate = new Date().toISOString().slice(0, 10);
  }

  //Metodo que se ejecuta SIEMPRE que se inicia sesion para crear una MEAL con la fecha de hoy si es que no existe, caso contrario no hace nada
  loadMeals() {

    let todayMeal: Meals[] | undefined;
    this.getUserMealByDate(this.currentDate).subscribe(result => {
      todayMeal = result;
    })

    if (todayMeal) {
      return;
    } else {
      const newMeal: Meals = {
        idUser: this.userToken,
        date: this.currentDate
      }

      this.postMeal(newMeal).subscribe();
    }
  }

  //Retorna todos los meals del usuario con la sesion iniciada usando userToken
  getUserMeals(): Observable<Meals[]> {
    return this._httpService.get<Meals[]>(`${this.baseUrl}?idUser=${this.userToken}`); // URL de todas las meals de un usuario específico
  }

  //Retornar una meal de una fecha especifica del usuario con la sesion iniciada usando userToken
  getUserMealByDate(date: string | undefined | null): Observable<Meals[]> {
    return this._httpService.get<Meals[]>(`${this.baseUrl}?idUser=${this.userToken}&date=${date}`); //URL DE UNA MEAL ESPECIFICA DE UN USUARIO ESPECIFICO
  }

  //Agruega una meal al Json
  postMeal(meal: Meals): Observable<Meals> {
    return this._httpService.post<Meals>(this.baseUrl, meal);
  }


  //metodos para retornar-agregar-eliminar-editar una FOOD a un MEAL especifico

  //elimina una FOOD especifica de una MEAL especifica de una MEALTYPE especifica
  deleteFoodFromMeal(mealId: string | undefined, foodId: number | undefined, mealType: 'breakfast' | 'lunch' | 'snack' | 'dinner' | undefined): Observable<Meals> {
    // Asegúrate de manejar casos donde mealId, foodId o mealType sean indefinidos
    console.log(mealType, foodId)
    if (!mealId || foodId === undefined || !mealType) {
      return throwError('Faltan parámetros necesarios');
    }

    return this._httpService.get<Meals>(`${this.baseUrl}/${mealId}`).pipe(
      map((meal: Meals) => {
        // Filtrar el array de alimentos eliminando el alimento con el foodId especificado
        if (meal[mealType]) {
          meal[mealType] = meal[mealType].filter(food => food.id !== foodId);
        }
        return meal;
      }),
      // Enviar el objeto meal actualizado al servidor para persistir los cambios
      switchMap(updatedMeal => this._httpService.put<Meals>(`${this.baseUrl}/${mealId}`, updatedMeal))
    );
  }



  addFoodToMeal(
    mealId: number | undefined,
    food: Food | undefined,
    mealType: 'breakfast' | 'lunch' | 'snack' | 'dinner' | undefined
  ): Observable<Meals> {
    // Validación de parámetros
    console.log(mealType, food);
    if (!mealId || !food || !mealType) {
      return throwError('Faltan parámetros necesarios');
    }

    return this._httpService.get<Meals>(`${this.baseUrl}/${mealId}`).pipe(
      map((meal: Meals) => {
        // Añadir el nuevo alimento al array correspondiente de la comida
        if (meal[mealType]) {
          meal[mealType].push(food);
        } else {
          meal[mealType] = [food]; // Crear el array si no existe
        }
        return meal;
      }),
      // Enviar el objeto meal actualizado al servidor para persistir los cambios
      switchMap(updatedMeal => this._httpService.put<Meals>(`${this.baseUrl}/${mealId}`, updatedMeal))
    );
  }




}
