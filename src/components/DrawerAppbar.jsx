import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ReactComponent as MenuIcon } from "../assets/Logos/align-justify.svg";
import { Slide, useScrollTrigger } from "@mui/material";
import Logo from "../assets/Logos/Delightfullyclothed_logo.png";
import TextLogo from "../assets/Logos/textlogo.png";
import { ReactComponent as ShoppingcartIcon } from "../assets/Logos/shopping-cart.svg";
import { ReactComponent as UserIcon } from "../assets/Logos/user.svg";
import { ReactComponent as SearchIcon } from "../assets/Logos/search.svg";
import Home from "feather-icons-react/build/IconComponents/Home";
import HomePage from "../pages/homepage/HomePage";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const drawerWidth = 200;
const navItems = ["Home", "About", "Contact"];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      className="box"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <img style={{ width: "50%" }} src={Logo} alt="logo" />
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <button className="nav_button">Home</button>
        <button className="nav_button">Store</button>
      </div>
      <div className="ig_icon">
        <FeatherIcon icon="instagram" />
      </div>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: "white",
            elevation: 0,
          }}
          component="nav"
          elevation={0}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              overflow: "hidden",
              height: "16vh",
            }}
          >
            <IconButton
              sx={{
                color: "green",
                ":hover": {
                  backgroundColor: "transparent",
                  transform: "translateY(-3px) scale(1.1)",
                },
              }}
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              // sx={{ mr: 2, display: { sm: "none" } }}
            >
              {/* <MenuIcon /> */}
              <MenuIcon />
            </IconButton>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img style={{ width: "50%" }} src={TextLogo} alt="logo" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "20%",
              }}
            >
              <IconButton
                sx={{
                  ":hover": {
                    backgroundColor: "transparent",
                    transform: "translateY(-3px) scale(1.1)",
                  },
                }}
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                // sx={{ mr: 2, display: { sm: "none" } }}
              >
                {/* <MenuIcon /> */}
                <SearchIcon />
              </IconButton>
              <IconButton
                sx={{
                  ":hover": {
                    backgroundColor: "transparent",
                    transform: "translateY(-3px) scale(1.1)",
                  },
                }}
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                // sx={{ mr: 2, display: { sm: "none" } }}
              >
                {/* <MenuIcon /> */}
                <UserIcon />
              </IconButton>
              <IconButton
                sx={{
                  ":hover": {
                    backgroundColor: "transparent",
                    transform: "translateY(-3px) scale(1.1)",
                  },
                }}
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                // sx={{ mr: 2, display: { sm: "none" } }}
              >
                {/* <MenuIcon /> */}
                <ShoppingcartIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: false, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>

      <HomePage />
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
