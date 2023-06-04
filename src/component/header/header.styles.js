import { NavLink as RouterLink } from "react-router-dom";

import { Link as MuiLink, Box, InputBase as MuiInputBase } from "@mui/material";
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

export const Link = styled(RouterLink)(() => ({
  color: "black",
  width: "fit-content",
  whiteSpace: "nowrap",
  margin: "0",
  textDecoration: "none",

  "&.active": {
    color: "var(--red)",
  },

  "&:hover": {
    color: "var(--red)",
  },
}));

export const Anchor = styled(MuiLink)(() => ({
  color: "black",
  width: "fit-content",
  whiteSpace: "nowrap",
  margin: "0",
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
      width: "12vw",
    },
  },
}));

export const Login = styled(MuiLink)(() => ({
  minHeight: 0,
  backgroundColor: "var(--red)",
  textDecoration: "none",
  color: "white",
  borderRadius: "8px",
  padding: "0.3rem 1.8rem",
  cursor: "pointer",
  border: "1px solid var(--red)",
  fontWeight: 700,
  "&:hover": {
    color: "var(--black)",
    background: "white",
  },
}));

export const Dropdown = styled(Box)(() => ({
  // display: "none",
  position: "absolute",
  background: "rgba(0, 0, 0, 1)",
  "-webkit-backdrop-filter": "blur(10px)",
  "backdrop-filter": "blur(10px)",
  minWidth: "220px",
  boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
  zIndex: 200,
  "&:hover": {
    display: "block",
  },
}));

export const DropdownContent = styled(Box)(() => ({
  "&:hover": {
    display: "block",
  },
}));
