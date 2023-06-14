import { Link } from "react-router-dom";

import { styled } from "@mui/material";

export const StyledButtonLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "var(--white)",
  boxSizing: "border-box",
  backgroundColor: "var(--red)",
  display: "flex",
  alignItems: "center",
  padding: "0 4vw",
  marginRight: "1rem",
  maxHeight: "3.1rem",
  fontSize: "1rem",
  border: "1px solid var(--red)",
  borderRadius: "8px",
  "&:hover": {
    color: "var(--red )",
    backgroundColor: "var(--white)",
  },
  "@media (max-width: 900px)": {
    fontSize: "2.5vw",
    maxHeight: "8vw",
    marginRight: "0.5rem",
  },
}));
