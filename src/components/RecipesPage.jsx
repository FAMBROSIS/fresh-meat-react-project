import React ,{useContext} from "react";
import { TimerContext } from "../App";import Recipe from './Recipe'
import VeganRecipe from './VeganRecipe'

const RecipesPage = () => {
  const fact=useContext(TimerContext)
  return (
    <div>
      <div>
        <Recipe />
        {/* <VeganRecipe /> */}
        </div>
        <div>{fact}</div>
    </div>
  )
}

export default RecipesPage