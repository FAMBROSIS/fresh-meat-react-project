import React ,{useContext} from "react";
import { TimerContext } from "../App";
import Music from "./Music";
import Video from "./Video";
import '../Content.css'


const Content = () => {
  const fact = useContext(TimerContext)

  return (
    <div id="body">
      <div id="content-div">
        <div id="youtube" >
          <h2></h2>
          <Music />
          <Video />
        </div>
      </div>
      <div>{fact}</div>
    </div>
  );
};

export default Content;
