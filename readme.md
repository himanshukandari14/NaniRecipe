# Recipe Book Application

This is a Recipe Book application built using React.js that allows users to browse and view detailed recipes. The application integrates with the Spoonacular Recipe API to fetch real-time recipe data and provides a user-friendly interface for exploring various recipes.

## Objective

To create an interactive and visually appealing Recipe Book application that:
- Displays a list of recipes on the homepage.
- Navigates to a detailed recipe page upon selection.
- Fetches data dynamically using the Spoonacular Recipe API.

---

## Features

1. **Homepage**  
   - Displays a list of recipes with their names and brief descriptions.
   - Users can click on any recipe to navigate to the detailed recipe page.

2. **Recipe Details Page**  
   - Displays detailed information about a selected recipe, including:
     - Name
     - Ingredients
     - Instructions
     - Recipe image

3. **Navigation**  
   - Includes a navigation bar or breadcrumbs for seamless navigation between pages.

4. **Error Handling**  
   - User-friendly error messages for API or network issues.

5. **API Integration**  
   - Fetches recipe data using the [Spoonacular Recipe API](https://spoonacular.com/food-api).

6. **Routing**  
   - Implements multi-page navigation using React Router.

7. **Deployment**  
   - The application is deployed on a vercel for easy access.

---

## Requirements

1. **API Integration**  
   - Obtain an API key from [Spoonacular](https://spoonacular.com/food-api).  
   - Fetch data for:
     - Recipe list (for the homepage).
     - Detailed recipe information (for the recipe details page).

2. **Routing with React Router**  
   - `Home`: Displays a list of recipes.  
   - `Recipe Details`: Displays full details of a selected recipe.

3. **Error Handling**  
   - Handle invalid API responses or network errors gracefully.

4. **Styling**  
   - Use Tailwind CSS to create a visually appealing and responsive interface.

---

## Bonus Features (Optional)

1. **Search Functionality**  
   - Allow users to search recipes by name or ingredients.


---

## Technologies Used

- **Frontend**: React.js, React Router, Axios, Tailwind CSS  
- **API**: Spoonacular Recipe API  
- **Build Tool**: Vite  
- **Language**: TypeScript  

---

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/himanshukandari14/naniRecipe.git
   cd recipe-book
