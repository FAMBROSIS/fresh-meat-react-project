import React from "react";
import Music from "./Music";
import Video from "./Video";
import '../Content.css'


const Content = () => {
  return (
    <div id="body">
      <div id="content-div">
        <div id="youtube" >
          <h2></h2>
          <Music />
          <Video />
        </div>
      </div>
    </div>
  );
};

export default Content;
