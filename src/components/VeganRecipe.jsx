import { createContext } from "react";
import React, { useState } from "react";

const VeganRecipe = () => {
  const { veganRecipe, setVeganRecipe } = useAPIContext();
  const [recipeId, setRecipeId] = useState(34);
  const [recipeData, setRecipeData] = useState(null);

  const fetchVRecipe = async () => {
    const url = `https://the-vegan-recipes-db.p.rapidapi.com/${recipeId}/`;
    // const url = `https://chinese-food-db.p.rapidapi.com/${recipeId}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "532d462c6fmsh5b753e8b3a957b5p12af45jsn77ff7661846a",
        "X-RapidAPI-Host": "the-vegan-recipes-db.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options); //saying that we want to wait for the response(fetch function) and after the data is fetched the data is displayed
      const result = await response.json();

      setVeganRecipe((prevRecipes) => [...prevRecipes, result]);

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div id="body">
        <button onClick={fetchVRecipe}>fetchRecipe</button>
      </div>
      {veganRecipe.map((recipe, index) => (
        <div key={index}>
          <p>{recipe.title}</p>
          <img src={recipe.image}></img>
          <p>Difficulty: {recipe.difficulty}</p>
          <p>Meal Size: {recipe.portion}</p>
          <p>Cook Time: {recipe.time}</p>
          <p>Meal Info: {recipe.description}</p>
          <p>Ingredients{recipe.ingredients}</p>
          {/* <p>{recipe.method}</p> */}
        </div>
      ))}
    </>
  );
};

export default VeganRecipe;
