import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="group animate-fade-in">
      <div className="bg-white min-h-[350px] max-h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl 
                    transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative">
          <div className="relative pb-[70%] overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="absolute inset-0 w-full h-full object-cover transform 
                       group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full 
                        group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-lg font-bold line-clamp-2 text-orange-400">{recipe.title}</h3>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 
                       group-hover:text-orange-500 transition-colors">
            {recipe.title}
          </h3>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4 text-orange-500" />
              <span>{recipe.readyInMinutes} mins</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4 text-orange-500" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;