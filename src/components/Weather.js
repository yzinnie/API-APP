import React, { useState, useEffect } from 'react';

const API_KEY = '7840db3f6ea08d7a7a2192e1fa39d4dc';

const Weather = () => {
  const [position, setPosition] = useState({});
  const [name, setName] = useState({});
  const [weather, setWeather] = useState({});
  const [temp, setTemp] = useState({});
  const [minTemp, setMinTemp] = useState({});
  const [maxTemp, setMaxTemp] = useState({});

  useEffect(() => {
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((currentPosition) => {
        setPosition({
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude,
        });
        resolve(currentPosition.coords);
      });
    }).then((coords) => {
      /* 날씨 API 요청하기 */
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&lang=kr&units=metric`
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setName(json.name);
          setWeather(json.weather[0]);
          setTemp(Math.floor(json.main.temp));
          setMinTemp(Math.floor(json.main.temp_min));
          setMaxTemp(Math.floor(json.main.temp_max));
        });
    });
  }, []);

  return (
    <div className="Weather">
      <div className="list">
        <div className="name">{`${name}`}</div>
        <div className="description">{` ${weather.description} `}</div>
        <div className="temp">{` ${temp}° `} </div>
        <div className="temp_set">
          {` ${minTemp}°`} / {`${maxTemp}°`}
        </div>
        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} />
      </div>
    </div>
  );
};
export default Weather;
