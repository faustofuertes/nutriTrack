export interface Food {
    id: number;
    name: string;
    caloriesPerGram: number;
    carbohydrates: number;
    proteins: number;
    fats: number;
    gramQuantity: number;
    foodType:string;
    foodDesc?:string;
}
