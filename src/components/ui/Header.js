import React, { useState, useEffect } from "react";
import CustomizedMenus from "./ProfileMenu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/tabs";
import Tab from "@material-ui/core/tab";
import Button from "@material-ui/core/button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import Grid from "@material-ui/icons/Grid";
import ExpandMoreIcon from "@material-ui/icons";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",
    [theme.breakpoints.down("nd")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.2em",
    },
  },
  logo: {
    height: "4em",
    [theme.breakpoints.down("nd")]: {
      height: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "2em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.signup,
    borderRadius: "50px",
    marginLeft: "50 px",
    marginRight: "20px",
    height: "45 px",
  },
  menu: {
    backgroundColor: theme.palette.common.arcPurple,
    color: "white",
    borderRadius: "0px",
    zIndex: 1302,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },

  Icon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.arcPurple,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawItemLogin: {
    backgroundColor: theme.palette.common.arcOrange,
  },
  drawItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);


  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const userClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenDrawer(false);
    }
  }

  const menuOptions = [
    {
      name: "Git Collaborations",
      link: "/GitCollaborations",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Create Git Listing",
      link: "/CreateGitListing",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "What are Git Collabs?",
      link: "/AboutGitCollabs",
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Git Collaborations",
      link: "/GitCollaborations",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },

    { name: "Account", link: "/Profile", activeIndex: 2 },
    // { name: "Meetups", link: "/Meetups", activeIndex: 3 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>

      {props.loggedIn ? (
        <Button
          color="secondary"
          className={classes.button}
          onClick={props.handleLogout}
        >
          Log out
        </Button>
      ) : (
        // <CustomizedMenus />
        <Link to="/login">
          <Button color="secondary" className={classes.button}>
            Login
          </Button>
        </Link>
      )}

      <Popper
        open={openMenu}
        anchorEl={anchorEl}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper classes={{ root: classes.menu }} elevation={0}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  onMouseLeave={handleClose}
                  disablePadding
                  // autoFocusItem={open}
                  id="simple-menu"
                  onKeyDown={handleListKeyDown}
                >
                  {menuOptions.map((option, i) => (
                    <MenuItem
                      key={`${option}${i}`}
                      component={Link}
                      to={option.link}
                      classes={{ root: classes.menuItem }}
                      onClick={(event) => {
                        handleMenuItemClick(event, i);
                        setValue(1);
                        handleClose();
                      }}
                      selected={i === selectedIndex && value === 1}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />

        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              divider
              key={`${route}${route.activeIndex}`}
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}


            
          <ListItem
            onClick={ (e) => {
              if (props.loggedIn) {
                e.preventDefault()
                props.handleLogout()
                setOpenDrawer(false);
                return
              }
              setOpenDrawer(false);
              setValue(4);
              // setLoginStatus(!loginStatus)
            }}
            divider
            button
            component={Link}
            classes={{
              root: classes.drawItemLogin,
              selected: classes.drawerItemSelected,
            }}
           
            to="/Login"
            selected={value === 4}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
               {props.loggedIn ? "Logout" : "Login"} 
            </ListItemText>
          </ListItem>


        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              onClick={() => setValue(0)}
              className={classes.logoContainer}
            >
              <img alt="company logo" className={classes.logo} src={logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
