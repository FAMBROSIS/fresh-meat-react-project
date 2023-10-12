import React, { useState, useEffect } from "react";
import '../Recipe.css'
const Recipe = () => {
  const [mexicanRecipe, setMexicanRecipe] = useState([]);
  const [recipeId, setRecipeId] = useState(34);
  const [recipeData, setRecipeData] = useState(null);

  // const [id, setId] = useState(null);
  // const [title, setTitle] = useState(null);
  // const [difficulty, setDifficulty] = useState(null);
  // const [portion, setPortion] = useState(null);
  // const [time, setTime] = useState(null);
  // const [description, setDescription] = useState(null);
  // const [ingredients, setIngredients] = useState([]);
  // const [method, setMethod] = useState([]);
  // const [image, setImage] = useState(null);

  const fetchMRecipe = async () => {
    const url = `https://the-mexican-food-db.p.rapidapi.com/${recipeId}/`;
    // const url = `https://chinese-food-db.p.rapidapi.com/${recipeId}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "202a5d42e1mshba5c6988b54f574p19a40ejsnbce2de5b904b",
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




      //   setId(result.id);
      //   setTitle(result.title);
      //   setDifficulty(result.difficulty);
      //   setPortion(result.portion);
      //   setTime(result.time);
      //   setDescription(result.description);
      //   setIngredients(result.ingredients);
      //   setMethod(result.method);
      //   setImage(result.image);
      //   // console.log(`id: ${id}, title: ${title}, difficulty: ${difficulty}, portion: ${portion}, time: ${time}, description: ${description}, ingredients: ${ingredients}, method: ${method},image: ${image}`);
      //   setMexicanRecipe(result);

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };



  // if (mexicanRecipe === null) {
  //     // Render loading or placeholder content while waiting for data
  //     return <div>Loading...</div>;
  // }


  return (
    <>
      <div id="body">
        <button onClick={fetchMRecipe}>Get A Recipe?</button>
      </div>
      {mexicanRecipe.map((recipe, index) => (
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

export default Recipe;
