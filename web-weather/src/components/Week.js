import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import "../scss/Week.scss";
import datetime from "../helper/datetime";
export default function Week(props) {
  const { weather } = props;
  const [weatherDetail, setWeatherDetail] = useState(weather?.daily?.[0]);
  const handleChangeWdetail = (weather) => {
    setWeatherDetail(weather);
  };
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 6, md: 3 }}>
        {weather?.daily?.map((w, index) => {
          return (
            <Grid item md={3} xs={12} sm={6}>
              <Paper
                className="grid_item "
                onClick={(e) => {
                  handleChangeWdetail(w);
                  console.log(w.weather[0].icon);
                }}
              >
                <div className="day">{datetime.convertDataToDay(w.dt)}</div>
                <div className="content">
                  <img
                    className="icon"
                    src={`http://openweathermap.org/img/wn/${w.weather?.[0].icon}@2x.png`}
                    alt=""
                  />
                  <div className="feeling">{`${w.temp.min}°C - ${w.temp.max}°C`}</div>
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Grid className="detail">
        <Paper className="detail_paper">
          <div className="detail_header">
            {datetime.convertDataToDay(weatherDetail.dt)}
          </div>
          <Grid
            className="detail_content"
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <div>
                Temperature:
                {`${weatherDetail.temp.min}°C - ${weatherDetail.temp.max}°C`}
              </div>
              <div>Rain: {weatherDetail.rain}%</div>
              <div>Humidity: {weatherDetail.humidity}%</div>
              <div>Wind speed: {weatherDetail.wind_speed}km/h</div>
            </Grid>
            <Grid item xs={6}>
              <div>
                Sunrise: {datetime.convertDataToOclock(weatherDetail?.sunrise)}
              </div>
              <div>
                Sunset: {datetime.convertDataToOclock(weatherDetail?.sunset)}
              </div>
              <div>Description: {weatherDetail?.weather?.[0].description}</div>
              <div>Atmospheric pressure: {weatherDetail?.pressure} hPa</div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
