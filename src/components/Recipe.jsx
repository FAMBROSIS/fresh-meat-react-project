import React, { useState, useEffect } from "react";
import "../Recipe.css";
const Recipe = () => {
  const [mexicanRecipe, setMexicanRecipe] = useState([]);
  const [recipeId, setRecipeId] = useState();
  const [recipeData, setRecipeData] = useState(null);

  const fetchMRecipe = async () => {
    const url = `https://the-mexican-food-db.p.rapidapi.com/${recipeId}/`;
    // const url = `https://chinese-food-db.p.rapidapi.com/${recipeId}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "532d462c6fmsh5b753e8b3a957b5p12af45jsn77ff7661846a",
        "X-RapidAPI-Host": "the-mexican-food-db.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options); //saying that we want to wait for the response(fetch function) and after the data is fetched the data is displayed
      const result = await response.json();

      /* The line `setMexicanRecipe((prevRecipes) => [...prevRecipes, result]);` is updating the state
variable `mexicanRecipe` by adding the `result` to the existing array of recipes. It uses the
functional form of the `setState` function to access the previous value of `mexicanRecipe` and
create a new array by spreading the previous recipes and adding the `result` at the end. This
ensures that the new recipe is added to the existing list of recipes without overwriting the
previous ones. */
      setMexicanRecipe((prevRecipes) => [...prevRecipes, result]);

      console.log(result);
    } catch (error) {
      window.alert(`error retreaving recipe`);
    }
  };

  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
    113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
    128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142,
    143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
    158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,
  ];

  const generateNumbers = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1));

      // Swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
      setRecipeId(arr[i]);
      console.log(setRecipeId(arr[i]))
    }
  };

  const handleClick = () => {
    fetchMRecipe();
    generateNumbers(numbers);
  };

  return (
    <>
      <div id="body">
        <button onClick={handleClick}>Get A Recipe?</button>
      </div>
      {mexicanRecipe.map((recipe, index) => (
        <div key={index}>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} id="recipe-image"></img>
          <p>Difficulty: {recipe.difficulty}</p>
          <p>Cook Time: {recipe.time}</p>
          <p>Meal Size: {recipe.portion}</p>
          <p>Meal Info: {recipe.description}</p>
          <p>Ingredients: {recipe.ingredients}</p>
          <p>Instructions: {JSON.stringify(recipe.method)}</p>
          {/* {console.log(recipe.method)} */}
        </div>
      ))}
    </>
  );
};

export default Recipe;
