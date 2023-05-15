import React from "react";

// import { useNavigate } from "react-router";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link, Box, List, ListItem, styled } from "@mui/material";

import Acbs from "../../assets/acbs.png";
import Sayno from "../../assets/saynotodoping.png";
import "./Footer.css";

const Footer = () => {
  // const history = useNavigate();

  const StyledLink = styled(Link)(() => ({
    color: "var(--white)",
    whiteSpace: "wrap",
    marginRight: "1rem",
    padding: 0,
    margin: 0,
    textDecoration: "none",
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
      <section className="inner-footer container">
        <Box className="doping_image">
          <Box className="logo">
            <img loading="lazy" src={Acbs} width="23%" alt="logo" />
          </Box>

          <Box className="doping">
            <img loading="lazy" src={Sayno} width="68%" alt="logo" />
          </Box>
        </Box>

        <Box className="home_footer">
          <Box>
            <h3>Contact Us</h3>
            <List className="quick_links">
              <ListItem disableGutters>
                <StyledLink href="https://www.africabsc.com/" target="_blank">
                  PO Box 8996 Rawdat AI-Khayl St, Mansoura, Doha, Qatar
                </StyledLink>
              </ListItem>
              <ListItem disableGutters>
                <StyledLink href="http://www.acbs.qa/" target="_blank">
                  ACBS
                </StyledLink>
              </ListItem>
              <ListItem disableGutters>
                <StyledLink href="http://www.ebsa.tv/" target="_blank">
                  EBSA
                </StyledLink>
              </ListItem>
              <ListItem disableGutters>
                <StyledLink href="https://obsf.info/" target="_blank">
                  OBSF
                </StyledLink>
              </ListItem>
              <ListItem disableGutters>
                <StyledLink href="https://www.pabsa.org" target="_blank">
                  PABSA
                </StyledLink>
              </ListItem>
            </List>
          </Box>

          <Box>
            <h3> Other Links</h3>
            <ul className="quick_links">
              <ListItem disableGutters>
                <StyledLink href="https://olympics.com/en/" target="_blank">
                  Olympic Movement
                </StyledLink>
              </ListItem>
              <ListItem
                disableGutters
                onClick={() => window.open("https://www.wcbs.sport/", "_blank")}
              >
                <StyledLink>World Confederation of Billiards Sports</StyledLink>
              </ListItem>
              <ListItem
                disableGutters
                onClick={() => window.open("https://wpapool.com/", "_blank")}
              >
                <StyledLink>World Pool Association</StyledLink>
              </ListItem>
              <ListItem
                disableGutters
                onClick={() =>
                  window.open("https://www.umb-carom.org/", "_blank")
                }
              >
                <StyledLink>Union Mondiale De Billiard</StyledLink>
              </ListItem>
              <ListItem
                disableGutters
                onClick={() =>
                  window.open("http://www.wada-ama.org/", "_blank")
                }
              >
                <StyledLink>World Anti-Doping Agency</StyledLink>
              </ListItem>
            </ul>
          </Box>

          <Box>
            <h3>Social links</h3>
            <Box className="social_links">
              <MailOutlineIcon
                style={{ marginLeft: 0 }}
                onClick={() => {
                  window.location.href = "mailto: ibsfinfo@gmail.com ";
                }}
              />
              <FacebookIcon
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/groups/ibsf.media/?ref=share",
                    "_blank"
                  );
                }}
              />
              <InstagramIcon
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/ibsf.media/?utm_medium=copy_link",
                    "_blank"
                  );
                }}
              />
              <TwitterIcon
                onClick={() => {
                  window.open("https://twitter.com/ibsf", "_blank");
                }}
              />
            </Box>
          </Box>
        </Box>
      </section>
    </footer>
  );
};

export default Footer;
