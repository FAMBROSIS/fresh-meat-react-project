import React, { useState, useEffect } from "react";

const Recipe = () => {
  const [mexicanRecipe, setMexicanRecipe] = useState("");
  const [recipeId, setRecipeId] = useState(1);
  const [recipeData, setRecipeData]=useState(null)

  const fetchMRecipe = async () => {
    const url = `https://the-mexican-food-db.p.rapidapi.com/${recipeId}`
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "80b360fcefmsh174cc3d1b1f6f97p1d3709jsn5ee1ff6263e8",
        "X-RapidAPI-Host": "the-mexican-food-db.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options); //saying that we want to wait for the response(fetch function) and after the data is fetched the data is displayed
      const result = await response.text();
      console.log(result);
      setMexicanRecipe(result)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
      fetchMRecipe();
      
  const recipeData={
    id: '',
    title: '',
    difficulty: '',
    portion: '',
    time: '',
    description: '',
    ingredience: [],
    method: [],
    image: ''
  }
  setRecipeData(recipeData)

  }, []); //without the braces you will be stuck in a forever loop; also used to hold events i think?


//   //FUNCTION THAT USES USE EFFECT TO INITIALIZE THE IMAGE TO SHOW UP ON THE PAGE WITHOUT RELOADING
//   useEffect(() => {
//     fetchFox();
//   }, []); //without the braces you will be stuck in a forever loop; also used to hold events i think?

  return (
    <div>
        <button onClick={fetchMRecipe}>{mexicanRecipe}</button>
    </div>
  )
};

export default Recipe;
