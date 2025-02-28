
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({temperature:0,conditions:""})

  useEffect(()=>{
    setWeather({temperature:25, conditions:"Sunny"})
  },[])
  return (
    <div>
        {/* Do not remove the main div */}
        <h2>Weather Report</h2>
        <WeatherDisplay weather={weather}/>
    </div>
  )
}

export default App
