import React, { useContext } from "react";
import { TimerContext } from "../App";
import Converter from "./Converter";
import "../Tools.css";
import TimerWrapper from "./TimerWrapper";

const Tools = () => {
  const fact = useContext(TimerContext);
  return (
    <div >
      <div style={{resize: "both"}}>
      <TimerWrapper/>
      </div>
      <div id="tools">
        <Converter />
      </div>
      <div>{fact}</div>
    </div>
  );
};

export default Tools;
