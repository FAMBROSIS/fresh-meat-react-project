import React,{ useState } from 'react'
import YouTube from 'react-youtube'


const Video = () => {
    const [isPlaying, setIsPlaying]=useState(false)
    const videoURL='wyeeG4oE6eQ'

    const video=()=>{
        if(isPlaying==false){
        setIsPlaying(true)
      }else if(isPlaying==true){
        setIsPlaying(false)
    }
    }

    const handleStart=()=>{
        video();
      }






  return (
    <div>

        {isPlaying && <YouTube videoId={videoURL} />}
        <p>Watch something while you wait? Click Here</p>
        {/* help the time pass? */}
        <button id="button" onClick={handleStart}>
        {isPlaying ? 'Stop' : '     Play'}
        </button>

    </div>
  )
}

export default Video