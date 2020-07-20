import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'
import Tabs from '@material-ui/core/tabs'
import Tab from '@material-ui/core/tab'
import Button from '@material-ui/core/button'
import {Link} from 'react-router-dom'

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
      }
  }))
  
export default function Header(props) {

    const classes = useStyles()
     const [value, setValue] = useState(0)

    const handleChange = (e, value) => {
        setValue(value)
    }

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
                      <Tabs value={value} onChange={handleChange}
                       className={classes.tabContainer}>
                         <Tab className={classes.tab} component={Link} to ="/" label="Home" /> 
                         <Tab className={classes.tab} component={Link} to ="/GitCollaborations" label="Git Collaborations" /> 
                         <Tab className={classes.tab} component={Link} to ="/Forums" label="Forums" /> 
                         <Tab className={classes.tab} component={Link} to ="/Meetups" label="Meetups" /> 
                      </Tabs>
                      <Button variant="contained" color="secondary" className={classes.button}>Login</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}

