import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, List, ListItem, styled } from "@mui/material";

import { StyledLink, StyledRouteLink } from "../styles/Styles";

import "./Footer.css";

const Footer = () => {
  const StyledList = styled(ListItem)(() => ({
    width: "fit-content",
    color: "var(--white)",
    cursor: "initial",
  }));

  return (
    <footer className="all_footer">
      <Container maxWidth="xl">
        <Box className="inner-footer">
          <Box className="home_footer">
            <Box>
              <h3>Contact Us</h3>
              <List className="quick_links">
                <StyledList disableGutters>
                  {/* <StyledLink color="#FFFFFF" href="https://www.africabsc.com/" target="_blank"> */}
                  PO Box 8996 Rawdat AI-Khayl St, Mansoura, Doha, Qatar
                  {/* </StyledLink> */}
                </StyledList>
              </List>
              <Box className="social_links">
                <StyledLink
                  color="#FFFFFF"
                  href="https://www.facebook.com/acbsport/"
                  target="_blank"
                >
                  <FacebookIcon />
                </StyledLink>
                <StyledLink
                  color="#FFFFFF"
                  href="https://twitter.com/ACBSport"
                  target="_blank"
                >
                  <TwitterIcon />
                </StyledLink>
                <StyledLink
                  color="#FFFFFF"
                  href="https://www.instagram.com/acbsmedia/"
                  target="_blank"
                >
                  <InstagramIcon />
                </StyledLink>
                <StyledLink
                  color="#FFFFFF"
                  href="https://www.youtube.com/@acbstv"
                  target="_blank"
                >
                  <YouTubeIcon />
                </StyledLink>
              </Box>
            </Box>
            <Box>
              <h3> Other Links</h3>
              <ul className="quick_links">
                <StyledList disableGutters>
                  <StyledLink
                    color="#FFFFFF"
                    href="https://olympics.com/en/"
                    target="_blank"
                  >
                    IOC
                  </StyledLink>
                </StyledList>
                <StyledList disableGutters>
                  <StyledLink
                    color="#FFFFFF"
                    href="https://wcbs.sport/"
                    target="_blank"
                  >
                    WCBS
                  </StyledLink>
                </StyledList>
                <StyledList disableGutters>
                  <StyledLink
                    color="#FFFFFF"
                    href="https://www.ibsf.info/"
                    target="_blank"
                  >
                    IBSF
                  </StyledLink>
                </StyledList>
                <StyledList disableGutters>
                  <StyledLink
                    color="#FFFFFF"
                    href="https://wpapool.com/"
                    target="_blank"
                  >
                    WPA-POOL
                  </StyledLink>
                </StyledList>
                <StyledList disableGutters>
                  <StyledLink
                    color="#FFFFFF"
                    href="https://www.wada-ama.org/en"
                    target="_blank"
                  >
                    WADA
                  </StyledLink>
                </StyledList>
              </ul>
            </Box>
            <Box>
              <h3>Pool Category</h3>
              <ul className="quick_links">
                <StyledList disableGutters>
                  <StyledRouteLink color="#FFFFFF" to="/category/8Ball Pool">
                    8Ball Pool
                  </StyledRouteLink>
                </StyledList>
                <StyledList disableGutters>
                  <StyledRouteLink color="#FFFFFF" to="/category/9Ball Pool">
                    9Ball Pool
                  </StyledRouteLink>
                </StyledList>
                <StyledList disableGutters>
                  <StyledRouteLink color="#FFFFFF" to="/category/10Ball Pool">
                    10Ball Pool
                  </StyledRouteLink>
                </StyledList>
              </ul>
            </Box>
            <Box>
              <h3>Snooker Category</h3>
              <ul className="quick_links">
                <StyledList disableGutters>
                  <StyledRouteLink color="#FFFFFF" to="/category/Snooker">
                    Snooker
                  </StyledRouteLink>
                </StyledList>
                <StyledList disableGutters>
                  <StyledRouteLink color="#FFFFFF" to="/category/Billiards">
                    Billiards
                  </StyledRouteLink>
                </StyledList>
                <StyledList disableGutters>
                  <StyledRouteLink color="#FFFFFF" to="/category/10Reds">
                    10Reds
                  </StyledRouteLink>
                </StyledList>
                <StyledList disableGutters>
                  <StyledRouteLink color="#FFFFFF" to="/category/6Reds">
                    6Reds
                  </StyledRouteLink>
                </StyledList>
                <StyledList disableGutters>
                  <StyledRouteLink color="#FFFFFF" to="/category/Team">
                    Team
                  </StyledRouteLink>
                </StyledList>
                <StyledList disableGutters>
                  <StyledRouteLink color="#FFFFFF" to="/category/Juniors">
                    Juniors
                  </StyledRouteLink>
                </StyledList>

                <StyledList disableGutters>
                  <StyledRouteLink color="#FFFFFF" to="/category/World Cup">
                    World Cup
                  </StyledRouteLink>
                </StyledList>
              </ul>
            </Box>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
