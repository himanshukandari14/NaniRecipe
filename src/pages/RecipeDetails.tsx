import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRecipeById } from '../services/api';
import { DetailedRecipe } from '../types/recipe';
import { ChevronLeft, Clock, Users, Loader2, ChefHat, UtensilsCrossed } from 'lucide-react';
import Navbar from '../components/Navbar';

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<DetailedRecipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const data = await getRecipeById(parseInt(id));
        setRecipe(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch recipe details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <Navbar onSearch={() => {}} />
        <div className="flex justify-center items-center min-h-screen">
          <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
        </div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <Navbar onSearch={() => {}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-xl max-w-md">
              <ChefHat className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <p className="text-red-500 mb-4">{error}</p>
              <Link
                to="/"
                className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-orange-500 
                         to-red-500 text-white rounded-full hover:from-orange-600 hover:to-red-600 
                         transform hover:scale-105 transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back to recipes
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navbar onSearch={() => {}} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Link
          to="/"
          className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8 
                   group transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-1 transform group-hover:-translate-x-1 transition-transform" />
          Back to recipes
        </Link>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden">
          <div className="relative">
            <div className="relative pb-[40%]">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{recipe.readyInMinutes} minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{recipe.servings} servings</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center text-orange-500">
                    <ChefHat className="h-6 w-6 mr-2" />
                    Ingredients
                  </h2>
                  <ul className="space-y-2">
                    {recipe.extendedIngredients.map((ingredient) => (
                      <li key={ingredient.id} className="flex items-start space-x-2">
                        <span className="text-orange-500">•</span>
                        <span>{ingredient.original}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center text-orange-500">
                  <UtensilsCrossed className="h-6 w-6 mr-2" />
                  Instructions
                </h2>
                <div className="prose prose-orange max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeDetails;