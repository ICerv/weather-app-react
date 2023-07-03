import React from 'react';
import './style.css';

export const WeatherCurrent = ({ weather }) => {
  const formatTime = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  if (!weather) {
    return <p>Loading...</p>;
  }

  const isCold = weather.main.temp < 10;

  return (
    <div
      className={`weather__current ${isCold ? 'weather__current--cold' : ''}`}
    >
      {weather ? (
        <>
          <h2 className="weather__city" id="mesto">
            {weather.name}
          </h2>
          <div className="weather__inner weather__inner--center">
            <div className="weather__section weather__section--temp">
              <span className="weather__temp-value" id="teplota">
                {Math.round(weather.main.temp)}
              </span>
              <span className="weather__temp-unit">°C</span>
              <div className="weather__description" id="popis">
                {weather.weather[0].description}
              </div>
            </div>
            <div className="weather__section weather__section--icon" id="ikona">
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="current weather icon"
              />
            </div>
          </div>
          <div className="weather__inner">
            <div className="weather__section">
              <h3 className="weather__title">Wind</h3>
              <div className="weather__value">
                <span>{weather.wind.speed}</span> km/h
              </div>
            </div>
            <div className="weather__section">
              <h3 className="weather__title">Humidity</h3>
              <div className="weather__value">
                <span>{weather.main.humidity}</span> %
              </div>
            </div>
          </div>
          <div className="weather__inner">
            <div className="weather__section">
              <h3 className="weather__title">Sunrise</h3>
              <div className="weather__value">
                <span>{formatTime(weather.sys.sunrise)}</span>
              </div>
            </div>
            <div className="weather__section">
              <h3 className="weather__title">Sunset</h3>
              <div className="weather__value">
                <span>{formatTime(weather.sys.sunset)}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
