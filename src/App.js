import React from 'react';
import './App.css';
import Timer from './components/timer';

function App() {
  return (
    <div className="App">
      <div className="screen">
        <Timer 
          time={25}
          autostart={false}
          step={1000}
          onTick = {(timeLeft) => console.log("Left time: " + timeLeft)}
          onTimePaused={(timeLeft) => console.log("Timer paused!")}
          onTimeStart={(timeLeft) => console.log("Timer started!")}
        />
      </div>
    </div>
  );
}

export default App;
