import "./App.css";
import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Maincontent from "./components/MainContent";
function App() {
  const [weather, setWeather] = useState();
  const onChange = (ChildData) => {
    return setWeather(ChildData);
  };
  return (
    <Container fixed sx={{ pt: 3 }}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: 1 / 4,
            height: "95vh",
            backgroundColor: "common.white",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            paddingLeft: "30px",
          }}
        >
          <Sidebar onChange={onChange} />
        </Box>
        <Box
          sx={{
            width: 3 / 4,
            height: "95vh",
            backgroundColor: "grey",
          }}
        >
          <Maincontent weather={weather} />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
