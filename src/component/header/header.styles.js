// import React from "react";

import { NavLink as MuiLink } from "react-router-dom";

import { Box, InputBase as MuiInputBase, Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

export const Search = styled("div")(() => ({
  position: "relative",
  color: "black",
  borderRadius: "20px",
  backgroundColor: alpha("#DDDDDD", 0.5),
  "&:hover": {
    backgroundColor: alpha("#DDDDDD", 1),
  },
}));

export const Link = styled(MuiLink)(() => ({
  color: "black",
  whiteSpace: "nowrap",
  margin: "0",
  // marginRight: "1rem",
  // margin: "0 auto",
  textDecoration: "none",
  "&.active": {
    color: "var(--red)",
  },
  "&:hover": {
    color: "var(--red)",
  },
}));

export const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  // padding: 0,
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
}));

export const InputBase = styled(MuiInputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "40vw",
    [theme.breakpoints.up("md")]: {
      width: "15vw",
    },
  },
}));

export const Login = styled(Button)(() => ({
  minHeight: 0,
  backgroundColor: "var(--red)",
  color: "white",
  borderRadius: "8px",
  padding: "0.2rem 1.8rem",
  border: "1px solid var(--red)",
  fontWeight: 700,
  "&:hover": {
    color: "var(--black)",
    background: "white",
  },
}));
