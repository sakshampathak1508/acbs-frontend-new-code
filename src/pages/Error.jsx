import React from "react";
import { NavLink } from "react-router-dom";

import { Button, Stack, Typography } from "@mui/material";

import logo from "../assets/acbs.png";

const Error = () => {
  return (
    <Stack
      flexDirection={"column"}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      gap={1}
      mt={20}
    >
      <img src={logo} height={150} width={150} alt="ACBS" />
      <Typography variant="h5">500, Internal Server Error</Typography>
      <NavLink to="/">
        <Button variant="contained" sx={{ width: "fit-content" }}>
          Go Back to Home
        </Button>
      </NavLink>
    </Stack>
  );
};

export default Error;
