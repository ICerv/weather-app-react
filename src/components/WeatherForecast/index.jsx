import React from 'react';
import './style.css';
import { getDayfromUnix } from '../../utils';

const WeatherForecast = ({ forecast }) => {
  return (
    <div className="weather__forecast" id="predpoved">
      {forecast ? (
        forecast.map((item) => (
          <div className="forecast" key={item.dt}>
            <div className="forecast__day">{getDayfromUnix(item.dt)}</div>
            <div className="forecast__icon">
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                style={{ height: '100%' }}
                alt="current weather icon"
              />
            </div>
            <div className="forecast__temp">
              {Math.round(item.main.temp)} °C
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default WeatherForecast;
