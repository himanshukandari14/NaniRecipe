import axios from 'axios';
import { Recipe, DetailedRecipe } from '../types/recipe';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

export const getRandomRecipes = async (number: number = 12): Promise<Recipe[]> => {
  try {
    const response = await api.get('/random', {
      params: { number },
    });
    return response.data.recipes;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || 'Failed to fetch random recipes';
      throw new Error(message);
    }
    throw new Error('An unexpected error occurred');
  }
};

export const getRecipeById = async (id: number): Promise<DetailedRecipe> => {
  try {
    const response = await api.get(`/${id}/information`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || `Failed to fetch recipe with ID: ${id}`;
      throw new Error(message);
    }
    throw new Error('An unexpected error occurred');
  }
};

export const searchRecipes = async (query: string): Promise<Recipe[]> => {
  try {
    const response = await api.get('/complexSearch', {
      params: {
        query,
        addRecipeInformation: true,
        number: 12,
      },
    });
    return response.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || `Failed to search recipes for: ${query}`;
      throw new Error(message);
    }
    throw new Error('An unexpected error occurred');
  }
};