import { Box, Toolbar as MuiToolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContent = styled(Box)(({ theme }) => ({
  background: theme.palette.grey.main,
  scrollBehavior: "smooth",
  height: "100vh",
  overflow: "auto",
}));

export const Toolbar = styled(MuiToolbar)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  margin: "auto",
  maxWidth: "1350px",
}));

export default MainContent;
