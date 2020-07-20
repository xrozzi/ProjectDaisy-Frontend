import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'
import Tabs from '@material-ui/core/tabs'
import Tab from '@material-ui/core/tab'
import Button from '@material-ui/core/button'
import {Link} from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import logo from '../../assets/logo.svg'

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

  const useStyles = makeStyles(theme => ({
      toolbarMargin: {
          ...theme.mixins.toolbar,
          marginBottom: "3em"
      },
      logo: {
          height: "4em"
      },
      logoContainer: {
          padding: 0,
          "&:hover": {
              backgroundColor: "transparent"
          }
      },
      tabContainer: {
          marginLeft: 'auto'
      },
      tab: {
          ...theme.typography.tab,
          minWidth: 10,
          marginLeft: "25px"
      }, 
      button: {
          ...theme.typography.signup,
          borderRadius: "50px",
          marginLeft: "50 px",
          marginRight: "20px",
          height: "45 px"
      },
      menu: {
          backgroundColor: theme.palette.common.arcPurple,
          color: "white",
          borderRadius: "0px"
      }, 
      menuItem: {
          ...theme.typography.tab,
          opacity: 0.7,
          "&:hover": {
              opacity: 1
          }
      }
    
  }));
  
export default function Header(props) {

    const classes = useStyles()
    const [value, setValue] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)


    const handleChange = (e, value) => {
        setValue(value)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    }

    const handleMenuItemClick = (e,i) => {
        setAnchorEl(null)
        setOpen(false)
        setSelectedIndex(i)
    }

    const handleClose = (e) => {
        setAnchorEl(null)
        setOpen(false)
    }

    const menuOptions = [
        {name: "Git Collaborations", link: "/GitCollaborations"}, 
        {name: "Create Git Listing", link: "/CreateGitListing"},
        {name: "What are Git Collabs?", link: "/AboutGitCollabs"}
    ]



    useEffect(() => {
        if (window.location.pathname === '/' && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === '/GitCollaborations' && value !== 1) {
            setValue(1)
        }  else if (window.location.pathname === '/Forums' && value !== 2) {
            setValue(2)
    } else if (window.location.pathname === '/Meetups' && value !== 3) {
        setValue(3)
     }
    }, [value])

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar disableGutters>

                        <Button component={Link} to="/"
                        disableRipple
                        onClick={() => 
                            setValue(0)}
                        className={classes.logoContainer}>
                        <img alt="company logo" className={classes.logo} src={logo} />
                        </Button>

                      <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>

                         <Tab 
                         className={classes.tab} 
                         component={Link} to ="/" 
                         label="Home" 
                         /> 

                         <Tab 
                         aria-owns={anchorEl ? "simple menu" : undefined}
                         aria-haspopup={anchorEl ? "true" : undefined}
                         className={classes.tab} 
                         component={Link} to ="/GitCollaborations" 
                         onMouseOver={event => handleClick(event)}
                         label="Git Collaborations" 
                         /> 

                         <Tab 
                         className={classes.tab} 
                         component={Link} to ="/Forums" 
                         label="Forums" 
                         /> 

                         <Tab 
                         className={classes.tab} 
                         component={Link} to ="/Meetups" 
                         label="Meetups"/> 

                      </Tabs>

                      <Button 
                      variant="contained" 
                      color="secondary" 
                      className={classes.button}>
                          Login
                      </Button>

                      <Menu
                        id="simple-menu" 
                        anchorEl={anchorEl} 
                        open={open}
                        onClose={handleClose}
                        classes={{paper: classes.menu}}
                        MenuListProps={{onMouseLeave: handleClose}}
                        elevation={0}
                      >

                     {menuOptions.map((option, i) => (
                             <MenuItem key={option} component={Link} to={option.link}
                             classes={{root: classes.menuItem}}
                             onClick={(event) => {handleMenuItemClick(event,i); setValue(1);
                            handleClose()}}
                             selected={i === selectedIndex && value === 1}
                             >
                             {option.name}
                             </MenuItem>
                     ))}

                      </Menu>


                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}

