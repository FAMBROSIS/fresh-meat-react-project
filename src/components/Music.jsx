import React,{ useState } from 'react'
import YouTube from 'react-youtube'


const Music = () => {
    const [isPlaying, setIsPlaying]=useState(false)
    const videoURL='eJDqtXZc0Uo'

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
        <p>Listen to something while you wait? Click Here</p>
        <button id="button" onClick={handleStart}>
        {isPlaying ? 'Stop' : '     Play'}
        </button>

    </div>
  )
}

export default Music