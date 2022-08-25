import React, { useState } from "react";
import { TextField } from "@mui/material";
import "../scss/Siderbar.scss";
import { getWeatherAsync } from "../Apis/getWeather";
import datetime from "../helper/datetime";
export default function Sidebar(props) {
  const [weather, setWeather] = useState();
  const [name, setName] = useState();
  const time = () => datetime.convertDtToDate(weather?.current?.dt);
  console.log(weather);
  console.log(name);

  return (
    <>
      <div className="inputField">
        <TextField
          placeholder="Search"
          onKeyDown={(e) => {
            if (e.code === "NumpadEnter" || e.code === "Enter") {
              getWeatherAsync(e.target.value).then((a) => {
                setWeather(a.weather);
                setName(a.cityname);
                props.onChange(a.weather);
              });
              e.target.value = "";
            }
          }}
        ></TextField>
      </div>

      <img
        className="pic1"
        src={`http://openweathermap.org/img/wn/${weather?.current?.weather?.[0].icon}@2x.png`}
        alt="weather"
      />

      <div className="location">
        <div className="city">{name}</div>
        <div className="degree">{weather?.current?.temp}°C</div>
        <div className="day">{time}</div>
      </div>
      <ul className="weather">
        <li>{weather?.current?.weather[0].description}</li>
        <li>Clouds {weather?.current?.clouds}%</li>
      </ul>
      <div className="img_bot">
        <img
          className="pic2"
          src="https://us.123rf.com/450wm/macrovector/macrovector1805/macrovector180500152/100615959-weather-forecast-web-page-with-heavy-rain-on-dark-cloudy-day-with-people-under-umbrellas-vector-illu.jpg?ver=6"
          alt="img2"
        />
        <p className="img_caption">{name}</p>
      </div>
    </>
  );
}
