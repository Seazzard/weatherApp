import React, { useState } from 'react';
import GetWeather from './components/GetWeather/GetWeather';
import './style.css';
import WeatherCurrentDate from './components/WeatherCurrentDate/WeatherCurrentDate';
import axios from 'axios';
import WhetherFiveDay from './components/WhetherFiveDay/WhetherFiveDay';
import Vanta from './components/vanta/Vanta';

function App() {
  const [weather, setWeather] = useState({});
  const [cityName, setCityName] = useState('');
  const [temp, setTemp] = useState('°C');
  const [weatherFive, setWeatherFive] = useState({});
  const [day, setDay] = useState('one');
  const [date, setDate] = useState('');

  const getWeatherFive = () => {
    axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=85fff85e48e253764b0b83604f7c2e8a`
    ).then(({ data }) => {
      setWeatherFive(data);
      setDate(data.list[0].dt_txt.slice(0, 10));
    });
    setDay('five');
  };

  return (
    <div className="App">
      <Vanta />
      {day === 'one' ? (
        <div className="form">
          <h1 className="form__title">Прогноз погоды</h1>
          <GetWeather
            cityName={cityName}
            setWeather={setWeather}
            setCityName={setCityName}
          />
          {JSON.stringify(weather) === '{}' ? (
            ''
          ) : (
            <>
              <WeatherCurrentDate
                weather={weather}
                temp={temp}
                setTemp={setTemp}
              />
              <button
                type="button"
                className="fivedays"
                onClick={getWeatherFive}
              >
                Погода на 5 дней
              </button>
            </>
          )}
        </div>
      ) : (
        <WhetherFiveDay
          weatherFive={weatherFive}
          weather={weather}
          setDay={setDay}
          temp={temp}
          setTemp={setTemp}
          date={date}
          setDate={setDate}
        />
      )}
    </div>
  );
}

export default App;
