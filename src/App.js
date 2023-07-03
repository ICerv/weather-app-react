import React, {useState, useEffect} from "react";
import "./App.css";
import { WeatherCurrent } from "./components/WeatherCurrent";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Prague"); 
  const [forecast, setForecast] = useState(null);


  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  const filterForecast = (array) => {
    return array.filter((_, index) => index % 8 === 0);
  };

  const getDayfromUnix = (unix) => {
    const date = new Date(unix * 1000);
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
  };


  useEffect(() => {
    const API_KEY = process.env.REACT_APP_MY_API_ID;
    // const city = "Prague"; 

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

          {/* Tlačítka pro změnu města */}
          <div className="button-group">
            <button className="button" onClick={() => handleCityChange('Prague')}>Prague</button>
            <button className="button" onClick={() => handleCityChange('Reykjavik')}>Reykjavik</button>
            <button className="button" onClick={() => handleCityChange('Tenerife')}>Tenerife</button>
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
