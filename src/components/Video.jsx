import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoURL = "wyeeG4oE6eQ";

  const video = () => {
    if (isPlaying == false) {
      setIsPlaying(true);
    } else if (isPlaying == true) {
      setIsPlaying(false);
    }
  };

  useEffect(()=>{
    video()
},[])
const handleStart = () => {
  video();
}
  return (
    <div id="body">
        <div id="content-div">

      {isPlaying && <YouTube videoId={videoURL} />}
      <p>Watch something while you wait? Click Here</p>


      <button id="button" onClick={handleStart}>
      {/* Need help passing the time? */}
        {isPlaying ? "Stop" : "     Play"}
      </button>
    </div>

    </div>

  );
};

export default Video;
