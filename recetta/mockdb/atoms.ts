import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
// {strMeal: 'Beef and Mustard Pie', strMealThumb: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg', idMeal: '52874'}

// Define the object type of savedRecipe(s)
export type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

// Global state for the application to store the saved recipes;
// the benefit of using an Atom is that the state is shared across the application;
// not just in the React environment
export const savedRecipesAtom = atomWithStorage<Recipe[]>("saved_recipes", []);
export const activeRecipeAtom = atom<Recipe | null>(null);
