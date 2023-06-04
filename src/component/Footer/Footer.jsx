import React from "react";
import { useNavigate } from "react-router";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, Box, List, ListItem, styled, ListItemText } from "@mui/material";

import "./Footer.css";
import { Toolbar } from "../../layout/BaseLayout.styles";

const Footer = () => {
  const navigate = useNavigate();

  const StyledLink = styled(Link)(() => ({
    color: "var(--white)",
    whiteSpace: "wrap",
    marginRight: "1rem",
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

  const StyledList = styled(ListItem)(() => ({
    width: "fit-content",
    color: "var(--white)",
    cursor: "initial",
  }));

  const StyledText = styled(ListItemText)(() => ({
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "1.2rem",
    color: "var(--white)",
    whiteSpace: "wrap",
    marginRight: "1rem",
    padding: 0,
    margin: 0,
    textDecoration: "none",
    transition: "all 250ms",

    "& .MuiTypography-root": {
      fontFamily: "inherit",
    },

    "&:hover": {
      color: "var(--red)",
      textDecoration: "underline",
    },

    "&:active": {
      color: "#337ab7",
    },
  }));

  return (
    <footer className="all_footer">
      <Toolbar>
        <Box sx={{ width: "100%" }} className="inner-footer">
          <Box className="home_footer">
            <Box>
              <h3>Contact Us</h3>
              <List className="quick_links">
                <StyledList disableGutters>
                  {/* <StyledLink href="https://www.africabsc.com/" target="_blank"> */}
                  PO Box 8996 Rawdat AI-Khayl St, Mansoura, Doha, Qatar
                  {/* </StyledLink> */}
                </StyledList>
              </List>
            </Box>
            <Box>
              <h3> Other Links</h3>
              <ul className="quick_links">
                <StyledList disableGutters>
                  <StyledLink href="https://olympics.com/en/" target="_blank">
                    IOC
                  </StyledLink>
                </StyledList>
                <StyledList disableGutters>
                  <StyledLink href="https://wcbs.sport/" target="_blank">
                    WCBS
                  </StyledLink>
                </StyledList>
                <StyledList disableGutters>
                  <StyledLink href="https://www.ibsf.info/" target="_blank">
                    IBSF
                  </StyledLink>
                </StyledList>
                <StyledList disableGutters>
                  <StyledLink href="https://wpapool.com/" target="_blank">
                    WPA-POOL
                  </StyledLink>
                </StyledList>
                <StyledList
                  disableGutters
                  href="https://www.wada-ama.org/en"
                  target="_blank"
                >
                  <StyledLink>WADA</StyledLink>
                </StyledList>
              </ul>
            </Box>
            <Box>
              <h3>Categories</h3>
              <ul className="quick_links">
                <StyledList
                  disableGutters
                  onClick={() => navigate("/category/Snooker")}
                >
                  <StyledText>Snooker</StyledText>
                </StyledList>
                <StyledList
                  disableGutters
                  onClick={() => navigate("/category/Billiards")}
                >
                  <StyledText>Billiards</StyledText>
                </StyledList>
                <StyledList
                  disableGutters
                  onClick={() => navigate("/category/10Reds")}
                >
                  <StyledText>10Reds</StyledText>
                </StyledList>
                <StyledList
                  disableGutters
                  onClick={() => navigate("/category/6Reds")}
                >
                  <StyledText>6Reds</StyledText>
                </StyledList>
                <StyledList
                  disableGutters
                  onClick={() => navigate("/category/Team")}
                >
                  <StyledText>Team</StyledText>
                </StyledList>
                <StyledList
                  disableGutters
                  onClick={() => navigate("/category/Juniors")}
                >
                  <StyledText>Juniors</StyledText>
                </StyledList>
                <StyledList
                  disableGutters
                  onClick={() => navigate("/category/8Ball Pool")}
                >
                  <StyledText>8Ball Pool</StyledText>
                </StyledList>
                <StyledList
                  disableGutters
                  onClick={() => navigate("/category/9Ball Pool")}
                >
                  <StyledText>9Ball Pool</StyledText>
                </StyledList>
                <StyledList
                  disableGutters
                  onClick={() => navigate("/category/10Ball Pool")}
                >
                  <StyledText>10Ball Pool</StyledText>
                </StyledList>
                <StyledList
                  disableGutters
                  onClick={() => navigate("/category/World Cup")}
                >
                  <StyledText>World Cup</StyledText>
                </StyledList>
              </ul>
            </Box>
            <Box>
              <h3>Social links</h3>
              <Box className="social_links">
                <StyledLink
                  href="https://www.facebook.com/acbsport/"
                  target="_blank"
                >
                  <FacebookIcon />
                </StyledLink>
                <StyledLink href="https://twitter.com/ACBSport" target="_blank">
                  <TwitterIcon />
                </StyledLink>
                <StyledLink
                  href="https://www.instagram.com/acbsmedia/"
                  target="_blank"
                >
                  <InstagramIcon />
                </StyledLink>
                <StyledLink
                  href="https://www.youtube.com/@acbstv"
                  target="_blank"
                >
                  <YouTubeIcon />
                </StyledLink>
              </Box>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </footer>
  );
};

export default Footer;
