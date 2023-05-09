import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContent = styled(Box)(({ theme }) => ({
  background: theme.palette.grey.main,
  marginTop: "65px",
  // padding: "17px 16px 30px",
  height: "calc(100vh - 65px)",
  overflow: "auto",
  // transition: theme.transitions.create(["margin"], {
  //   duration: theme.transitions.duration.shortest,
  // }),
  // [theme.breakpoints.up("sm")]: {
  //   margin: "71px 0 0  250px",
  //   padding: "35px 16px 31px 16px",
  // },
}));

export default MainContent;
