import React ,{useContext} from "react";
import { TimerContext } from "../App";import Converter from "./Converter";
import '../Tools.css'
import TimerWrapper from './TimerWrapper'

const Tools = () => {
  const fact=useContext(TimerContext)
  return (
    <div>
      <TimerWrapper />
      <div id="tools">
        <Converter />
      </div>
      <div>{fact}</div>
    </div>
  );
};

export default Tools;
