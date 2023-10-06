import React, { useState, useEffect } from 'react'


const Timer = () => {
    const [time, setTime] = useState(100000); //seting the initial time to be zero
    const [isRunning, setIsRunning] = useState(false); //we are creating is running to represent if the watch is running or not and using the bool useState to represent the start and stop
    const [timerInput, setTimerInput]=useState('') //storing the input value for the timer in a string



    
  
    useEffect(() => {
      //using to set up the start stop
      //using use effect to check if the timer is running
      let intervalId; //setting a intervalId
      if (isRunning) {
        //if the watch is running then the interval will update the Time state by 1 every 10 milisec
        intervalId = setInterval(() => setTime(time + 1), 10); //this intervalId will hold setTime as well as time. The setInterval is a function that is used that calls in milliseconds
      }
      return () => clearInterval(intervalId);
    }, [isRunning, time]);
  
    const hours = Math.floor(time / 360000); //using math.floor to to convert the time to millisec so we divide the time divided by 360,000 to get hours
    const min = Math.floor((time % 360000) / 6000); //dividing the time to by 360,000 and deviding that by 6000 to convert to min
    const sec = Math.floor((time % 6000) / 100); //  divides the time by 6000 and then devides that value by 100 to convert to seconds
    const millisec = time % 100; // converts to millisec  
    //creating a functions to stop and start the timer
    const startAndStop = () => {
      //updating the isRunning to true
      setIsRunning(!isRunning);
    };
  
    //making a function to handle the reset of the timer
    const reset = () => {
      setTime(0);
    };
  
   
    const video=()=>{
      if(isPlaying==false){
      setIsPlaying(true)
    }else if(isPlaying==true){
      setIsPlaying(false)
    }
  }
  
    
  
  
    const handleStart=()=>{
      startAndStop();
        //   video();
    }
  
  
  
    return (
      <body>        
        <div id="text">
          <div id="timer-buttons">
            <input type="number" />
          <div id="timer">
            {/* converting the times to strings and using padStart to */}
            {hours}:{min.toString().padStart(2, "0")}:
            {sec.toString().padStart(2, "0")}:
            {millisec.toString().padStart(2, "0")}
        </div>
            <br></br>
            <button id="start" onClick={handleStart}>
              {isRunning ? "Stop Game" : "Start Game"}
            </button>
            <button id="reset" onClick={reset}>
              Reset
            </button>
            </div>
            <div video>
            </div>
          </div>
            
          <br></br>
          <br></br>
          <br></br>
      </body>
    );
  };


export default Timer