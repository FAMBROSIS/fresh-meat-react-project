import React from "react";
import Converter from "./Converter";
import '../Tools.css'
import TimerWrapper from './TimerWrapper'

const Tools = () => {
  return (
    <div>
      <TimerWrapper />
      <div id="tools">
        <Converter />
      </div>
    </div>
  );
};

export default Tools;
