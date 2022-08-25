import React, { useState } from "react";
import { Box, Grid, Paper } from "@mui/material";
import { BiWind } from "react-icons/bi";
import { BsSun, BsThermometerHalf } from "react-icons/bs";
import { MdVisibility } from "react-icons/md";
import { WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import datetime from "../helper/datetime";
import "../scss/Today.scss";
export default function Today(props) {
  const { weather } = props;
  console.log(weather);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Paper className="block">
              <div className="descript">UV index</div>
              <BsSun className="illus_img" color="#ffc107" />
              <div className="num">{weather?.current?.uvi} UVI</div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="block">
              <div className="descript">Wind Status</div>
              <BiWind className="illus_img" color="#0d6efdc4" />
              <div className="num">{weather?.current?.wind_speed} km/h</div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="block">
              <div className="descript">Sunrise & Sunset</div>

              <div className="sun">
                <WiSunrise
                  className="sun_sunrise"
                  size="45px"
                  color="#ffc107"
                />
                <p>
                  Sunrise:{" "}
                  {datetime.convertDataToOclock(weather?.current?.sunrise)}
                </p>
              </div>
              <div className="sun">
                <WiSunset className="sun_sunset" size="45px" color="#ffc107" />
                <p>
                  Sunset:{" "}
                  {datetime.convertDataToOclock(weather?.current?.sunset)}
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="block">
              <div className="descript">Humidity</div>
              <WiHumidity className="illus_img" color="#0d6efdc4" />
              <div className="num">{weather?.current?.humidity} %</div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="block">
              <div className="descript">Visibility</div>
              <MdVisibility className="illus_img" color="#ffc107" />
              <div className="num">
                {`${weather?.current?.visibility / 1000}`} km
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="block">
              <div className="descript">Pressure</div>
              <BsThermometerHalf className="illus_img" color="#0d6efdc4" />
              <div className="num">{weather?.current?.pressure} hPa</div>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
