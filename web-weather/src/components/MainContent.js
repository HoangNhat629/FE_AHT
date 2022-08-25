import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Hour from "./Hour";
import Today from "./Today";
import Week from "./Week";
import "../scss/MainCotent.scss";

export default function MainContent(props) {
  const [value, setValue] = useState(0);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        margin-top="30px"
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={"span"}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { weather } = props;
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          className="tab"
          onChange={handleChange}
          aria-label="basic tabs example"
          value={value}
        >
          <Tab label="Today" {...a11yProps(0)} />
          <Tab label="Week" {...a11yProps(1)} />
          <Tab label="Hour" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Today weather={weather} key="" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Week weather={weather} key="" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Hour weather={weather} key="" />
      </TabPanel>
    </>
  );
}
