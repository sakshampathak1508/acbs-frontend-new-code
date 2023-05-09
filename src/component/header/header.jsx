import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";

// import InputBase from "@mui/material/InputBase";
// import Paper from "@mui/material/Paper";

import * as Styles from "./header.styles.js";
import LOGO from "../../assets/acbs.png";
import "./header.styles.js";
// import Back from "../../assets/back.png";

import "bootstrap/dist/css/bootstrap.css";

// function myFunction() {
//   var x = document.getElementsByClassName("ui")[0];
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }
// eslint-disable-next-line no-unused-vars
const Header = ({ active }) => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState("");
  const [searched, setSearched] = useState();
  const isMobile = useMediaQuery("(min-width:900px)");

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawerWidth = 250;
  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const handleSearch = event => {
    console.log("value", searched);
    event.preventDefault();
  };

  const drawer = (
    <Toolbar
      onClick={handleDrawerToggle}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      {/* <Styles.Link className="navbar-brand" href="#"> */}
      {/* <img src={LOGO} height="35px" alt="logo" /> */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        sx={{ ml: "auto" }}
      >
        {/* <li className="nav-item"> */}
        {/* <img src={Back} /> */}
        {/* </li> */}
        <CloseIcon sx={{ fontSize: "25px" }} />
      </IconButton>
      {/* </Styles.Link> */}
      {/* <Divider size="sm" color="black" /> */}
      <List sx={{ width: "100%", p: 0 }}>
        <ListItem>
          <Styles.Link to="/">Home</Styles.Link>
        </ListItem>
        <ListItem>
          <Styles.Link to="/news">News</Styles.Link>
        </ListItem>
        <ListItem>
          <Styles.Link to="/news">About</Styles.Link>
        </ListItem>
        <ListItem>
          <Styles.Link to="/news">Tournaments</Styles.Link>
        </ListItem>
        <ListItem>
          <Styles.Link to="/news">Members</Styles.Link>
        </ListItem>
        <ListItem>
          <Styles.Link to="/news">Videos</Styles.Link>
        </ListItem>
        <ListItem>
          <Styles.Link to="/news">Contact Us</Styles.Link>
        </ListItem>
        <ListItem>
          {/* <Styles.Link to="/news">Login</Styles.Link> */}
          <Styles.Login>Login</Styles.Login>
        </ListItem>
      </List>
    </Toolbar>
  );

  return (
    <>
      <AppBar sx={{ minHeight: "64px", background: "white" }}>
        <Box sx={{ maxWidth: "1350px", width: "100%", margin: "0 auto" }}>
          <Toolbar
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
                sx={{ mr: { md: "2rem", sm: 0 } }}
              >
                <img src={LOGO} height="35px" alt="logo" />
              </Styles.Link>
              {/* <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button> */}
              {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
              <List
                sx={{ display: { xs: "none", md: "flex" } }}
                // className="navbar-nav"
              >
                <ListItem>
                  <Styles.Link to="/">Home</Styles.Link>
                </ListItem>
                <ListItem>
                  <Styles.Link to="/news">News</Styles.Link>
                </ListItem>
                <ListItem>
                  <Styles.Link to="/event">Event</Styles.Link>
                </ListItem>
                <ListItem>
                  <Styles.Link to="/news">About</Styles.Link>
                </ListItem>
                {/* <ListItem>
                  <Styles.Link to="/news">Tournaments</Styles.Link>
                </ListItem> */}
                {/* <ListItem>
              <Styles.Link to="/news">Members</Styles.Link>
            </ListItem> */}
                <ListItem>
                  <Styles.Link to="/news">Videos</Styles.Link>
                </ListItem>
                <ListItem>
                  <Styles.Link to="/news">Contact Us</Styles.Link>
                </ListItem>
                {/* <ListItem>
              <Box>
                <Styles.Link to="/news">Login</Styles.Link>
              </Box>
            </ListItem> */}
              </List>
            </Box>
            {/* </div> */}

            <Box sx={{ display: "flex" }}>
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
              onClick={handleDrawerToggle}
              sx={{ color: "black", display: { md: "none" } }}
            >
              {/* <li className="nav-item"> */}
              {/* <img src={Back} /> */}
              {/* </li> */}
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Box>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={isMobile ? false : mobileOpen}
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
