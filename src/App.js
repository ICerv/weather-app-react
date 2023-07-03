import React, {useState, useEffect} from "react";
import "./App.css";
import { WeatherCurrent } from "./components/WeatherCurrent";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Prague"); 



  const fetchWeather = (cityToFetch) => {
    const API_KEY = process.env.REACT_APP_MY_API_ID;
    // const city = "Prague"; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityToFetch}&units=metric&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => {
        console.log("Error loading weather data:", error);
      });
  };


  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleCityChange = (newCity) => {
    setCity(newCity);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="weather">
        <WeatherCurrent weather={weather} />

          {/* Tlačítka pro změnu města */}
          <div className="button-group">
            <button className="button" onClick={() => handleCityChange('City01')}>City01</button>
            <button className="button" onClick={() => handleCityChange('City02')}>City02</button>
            <button className="button" onClick={() => handleCityChange('City03')}>City03</button>
          </div>
         
          <div class="weather__forecast" id="predpoved">
            <div class="forecast">
              <div class="forecast__day">Day, date</div>
              <div class="forecast__icon">
                {/* <img
                  src={URL FROM OPEN WEATHER}
                  style={{ height: "100%" }}
                  alt="current weather icon"
                /> */}
              </div>
              <div class="forecast__temp">-- °C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
