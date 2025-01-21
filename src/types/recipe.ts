export interface Recipe {
  id: number;
  title: string;
  image: string;
  summary: string;
  readyInMinutes: number;
  servings: number;
}

export interface DetailedRecipe extends Recipe {
  instructions: string;
  extendedIngredients: {
    id: number;
    original: string;
    amount: number;
    unit: string;
  }[];
}