import React from "react";
import { Box } from "@mui/material";
import logo from "../../assets/logo.png";

function Logo() {
  return (
    <Box
      component="img"
      src={logo}
      alt="QTify Logo"
      sx={{
        height: { xs: 30, sm: 35, md: 40 }, // responsive height
        width: "auto",
      }}
    />
  );
}

export default Logo;
