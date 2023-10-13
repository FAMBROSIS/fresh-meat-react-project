import React, { useContext } from "react";
import { TimerContext } from "../App";
import VeganRecipe from "./VeganRecipe";
import Recipe from "./Recipe";

const RecipesPage = () => {
  const fact = useContext(TimerContext);
  return (
    <div>
      <div>
        <Recipe />
        {/* <VeganRecipe /> */}
      </div>
      <div>{fact}</div>
    </div>
  );
};

export default RecipesPage;
