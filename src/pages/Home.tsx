import React, { useEffect, useState } from 'react';
import { getRandomRecipes, searchRecipes } from '../services/api';
import { Recipe } from '../types/recipe';
import RecipeCard from '../components/RecipeCard';
import Navbar from '../components/Navbar';
import { Loader2, ChefHat } from 'lucide-react';

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const data = await getRandomRecipes();
      setRecipes(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch recipes. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      fetchRecipes();
      return;
    }

    try {
      setLoading(true);
      const results = await searchRecipes(query);
      setRecipes(results);
      setError(null);
    } catch (err) {
      setError('Failed to search recipes. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navbar onSearch={handleSearch} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {error ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-xl max-w-md">
              <ChefHat className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <p className="text-red-500 mb-4">{error}</p>
              <button
                onClick={fetchRecipes}
                className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white 
                         rounded-full hover:from-orange-600 hover:to-red-600 
                         transform hover:scale-105 transition-all duration-300"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
          </div>
        ) : (
          <div className="recipe-grid">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;