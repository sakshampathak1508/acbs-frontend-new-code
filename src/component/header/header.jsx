import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { KeyboardArrowDown } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";

import "./header.css";

import * as Styles from "./header.styles.js";
import LOGO from "../../assets/acbs.png";
import "./header.styles.js";

const Header = () => {
  const navigate = useNavigate();

  const [searched, setSearched] = useState();
  const isMobile = useMediaQuery("(min-width:900px)");

  const [sideNav, setSideNav] = React.useState(false);

  const drawerWidth = 250;
  const handleDrawerToggle = () => {
    setSideNav(prevState => !prevState);
  };

  const handleSearch = event => {
    event.preventDefault();

    if (searched) navigate(`search/?query=${searched}`);
  };

  const drawer = (
    <Toolbar sx={{ display: "flex", flexDirection: "column" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        sx={{ ml: "auto" }}
        onClick={handleDrawerToggle}
      >
        <CloseIcon sx={{ fontSize: "25px" }} />
      </IconButton>
      <List sx={{ width: "100%", p: 0 }}>
        <ListItem>
          <Styles.Link onClick={handleDrawerToggle} to="/">
            Home
          </Styles.Link>
        </ListItem>
        <ListItem>
          <Styles.Link onClick={handleDrawerToggle} to="/news">
            News
          </Styles.Link>
        </ListItem>
        <ListItem>
          <Styles.Link onClick={handleDrawerToggle} to="/event">
            Event
          </Styles.Link>
        </ListItem>
        <ListItem className="dropdown">
          <Box>
            <Typography variant="span">
              About <KeyboardArrowDown />
            </Typography>
            <Box className="dropdown-content">
              <Styles.Link onClick={handleDrawerToggle} to="/about-us">
                The ACBS
              </Styles.Link>
              <Styles.Link onClick={handleDrawerToggle} to="/executives">
                Executives
              </Styles.Link>
              <Styles.Link onClick={handleDrawerToggle} to="/members">
                Members
              </Styles.Link>
              <Styles.Link onClick={handleDrawerToggle} to="/past-champions">
                Past Champions
              </Styles.Link>
              <Styles.Link onClick={handleDrawerToggle} to="/rules">
                Rules
              </Styles.Link>
            </Box>
          </Box>
        </ListItem>
        <ListItem>
          <Styles.Link onClick={handleDrawerToggle} to="/documents">
            Documents
          </Styles.Link>
        </ListItem>
        <ListItem className="dropdown">
          <Box>
            <Typography variant="span">
              Gallery&apos;s <KeyboardArrowDown />
            </Typography>
            <Box className="dropdown-content">
              <Styles.Anchor
                target="_blank"
                href="https://www.facebook.com/acbsport/photos_albums"
              >
                Photographs
              </Styles.Anchor>
              <Styles.Anchor
                href="https://www.youtube.com/@acbstv/videos"
                target="_blank"
              >
                Videos
              </Styles.Anchor>
            </Box>
          </Box>
        </ListItem>
        <ListItem>
          <Styles.Link onClick={handleDrawerToggle} to="/contact-us">
            Contact Us
          </Styles.Link>
        </ListItem>
        <ListItem>
          <Styles.Login
            href="https://acbsbackend.pythonanywhere.com/admin/login/?next=/admin/"
            target="_blank"
          >
            Login
          </Styles.Login>
        </ListItem>
      </List>
    </Toolbar>
  );

  return (
    <>
      <AppBar
        sx={{
          position: "sticky",
          top: 0,
          minHeight: "64px",
          background: "white",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              background: "white",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Styles.Link
                className="navbar-brand"
                to="/"
                sx={theme => ({
                  [theme.breakpoints.up(950)]: { mr: "2rem" },
                })}
              >
                <img src={LOGO} height="35px" width="35px" alt="logo" />
              </Styles.Link>

              <List sx={{ display: { xs: "none", md: "flex" } }}>
                <ListItem>
                  <Styles.Link to="/">Home</Styles.Link>
                </ListItem>
                <ListItem>
                  <Styles.Link to="/news">News</Styles.Link>
                </ListItem>
                <ListItem>
                  <Styles.Link to="/event">Event</Styles.Link>
                </ListItem>
                <ListItem className="dropdown">
                  <Styles.Link to="/about-us">
                    About <KeyboardArrowDown />
                  </Styles.Link>
                  <Box className="dropdown-content">
                    <Styles.Link to="/about-us">The ACBS</Styles.Link>
                    <Styles.Link to="/executives">Executives</Styles.Link>
                    <Styles.Link to="/members">Members</Styles.Link>
                    <Styles.Link to="/past-champions">
                      Past Champions
                    </Styles.Link>
                    <Styles.Link to="/rules">Rules</Styles.Link>
                  </Box>
                </ListItem>
                <ListItem>
                  <Styles.Link to="/documents">Documents</Styles.Link>
                </ListItem>
                <ListItem className="dropdown">
                  <Typography variant="span" sx={{ display: "flex" }}>
                    Gallery&apos;s <KeyboardArrowDown />
                  </Typography>
                  <Box className="dropdown-content">
                    <Styles.Anchor
                      target="_blank"
                      href="https://www.facebook.com/acbsport/photos_albums"
                    >
                      Photographs
                    </Styles.Anchor>
                    <Styles.Anchor
                      href="https://www.youtube.com/@acbstv/videos"
                      target="_blank"
                    >
                      Videos
                    </Styles.Anchor>
                  </Box>
                </ListItem>
                <ListItem>
                  <Styles.Link to="/contact-us">Contact Us</Styles.Link>
                </ListItem>
              </List>
            </Box>
            {/* </div> */}

            <Box
              sx={{
                display: "flex",
                gap: "5px",
                flexWrap: "wrap",
                m: "10px 0",
              }}
            >
              <form onSubmit={handleSearch}>
                <Styles.Search>
                  <Styles.SearchIconWrapper
                    sx={{ color: "black", cursor: "pointer" }}
                  >
                    <Button
                      sx={{
                        minWidth: 0,
                        color: "black",
                        p: 0,
                        borderRadius: "50%",
                        minHeight: 0,
                      }}
                      type="submit"
                    >
                      <SearchIcon />
                    </Button>
                  </Styles.SearchIconWrapper>
                  <Styles.InputBase
                    onChange={event => setSearched(event.target.value)}
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Styles.Search>
              </form>
              <Styles.Login
                href="https://acbsbackend.pythonanywhere.com/admin/login/?next=/admin/"
                target="_blank"
                sx={{
                  marginLeft: "0.8rem",
                  display: { xs: "none", md: "block" },
                }}
              >
                Login
              </Styles.Login>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ color: "black", display: { md: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={isMobile ? false : sideNav}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
