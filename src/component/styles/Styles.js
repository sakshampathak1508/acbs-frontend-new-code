import { Link as RouteLink } from "react-router-dom";

import { styled, Link as MuiLink } from "@mui/material";

export const StyledLink = styled(MuiLink)(
  ({ theme, color = theme.palette.common.black }) => ({
    color: color,
    whiteSpace: "wrap",
    marginRight: theme.spacing(1),
    padding: 0,
    margin: 0,
    textDecoration: "none",
    transition: "all 250ms",
    "&:hover": {
      color: "var(--red)",
      textDecoration: "underline",
    },
    "&:active": {
      color: "#337ab7",
    },
  })
);

export const StyledRouteLink = styled(RouteLink)(({ color }) => ({
  all: "reset",
  color,
  textDecoration: "none",
  "&:hover": { color: "var(--red)" },
}));
