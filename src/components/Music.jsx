import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "../Music.css";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoURL = "eJDqtXZc0Uo";

  const video = () => {
    if (isPlaying == false) {
      setIsPlaying(true);
    } else if (isPlaying == true) {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    video();
  }, []);
  const handleStart = () => {
    video();
  };

  return (
    <div id="body">
      <div>
        {isPlaying && <YouTube videoId={videoURL} />}
        <p>Listen to something while you wait? Click Here</p>
        <button id="button" onClick={handleStart}>
          {isPlaying ? "Stop" : "     Play"}
        </button>
      </div>
    </div>
  );
};

export default Music;
