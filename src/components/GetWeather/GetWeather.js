import React from 'react';
import axios from 'axios';

const GetWeather = ({ cityName, setWeather, setCityName }) => {
  const getWeather = () => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=85fff85e48e253764b0b83604f7c2e8a`
    ).then(({ data }) => setWeather(data));
  };

  return (
    <>
      <input
        className="form__input"
        type="text"
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Write a city"
      />
      <button className="form__btn" type="button" onClick={() => getWeather()}>
        Узнать погоду
      </button>
    </>
  );
};

export default GetWeather;
