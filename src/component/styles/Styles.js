import { styled, Link as MuiLink } from "@mui/material";

export const StyledLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.common.black,
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
}));
