import React, {useState, useEffect} from "react";
import "./App.css";
import { WeatherCurrent } from "./components/WeatherCurrent";
import WeatherForecast from "./components/WeatherForecast";
import { filterForecast } from "./utils";
import { cities } from "./utils";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Prague"); 
  const [forecast, setForecast] = useState(null);


  const handleCityChange = (event) => {
    const newCity = event.target.value;
    setCity(newCity);
  };

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_MY_API_ID;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => {
        console.log("Error loading weather data:", error);
      });

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      const filteredForecast = filterForecast(data.list);
      setForecast(filteredForecast);
      console.log(filteredForecast);
    })
    .catch((error) => {
      console.log("Error loading forecast data:", error);
    });
  }, [city]);


  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="weather">
        <WeatherCurrent weather={weather} />

        <div className="select-wrapper">
            <select
              className="select"
              name="cityselect"
              id="cityselect"
              value={city}
              onChange={handleCityChange}
            >
              <option value="--">city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Tlačítka pro změnu města
          <div className="button-group">
            <button className="button" onClick={() => handleCityChange('Prague')}>Prague</button>
            <button className="button" onClick={() => handleCityChange('Reykjavik')}>Reykjavik</button>
            <button className="button" onClick={() => handleCityChange('Tenerife')}>Tenerife</button>
          </div> */}

          <WeatherForecast forecast={forecast} />
        </div>
      </div>
    </div>
  );
};

export default App;
