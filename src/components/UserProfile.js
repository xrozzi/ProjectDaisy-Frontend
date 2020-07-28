import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridGap: theme.spacing(3),
    },
    sidebar: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // border: '1px solid',
        borderRadius: 10,
        // borderColor: '#AF3B6E',
        backgroundColor: '#F8F2F6',
        alignItems: "center"
    },
    skills: {
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(1,5),
        // border: '1px solid',
        borderRadius: 10,
        // borderColor: '#AF3B6E',
        backgroundColor: '#F8F2F6',
        alignItems: "center"
  
    },
    gitCollab: {
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(1,1),
        borderRadius: 10,
        // border: '1px solid',
        // borderColor: '#AF3B6E',
        backgroundColor: '#F8F2F6',
        alignItems: "center",
    },
    divider: {
      margin: theme.spacing(2, 1)
    },


  }));

  const labels = {
    
    1: 'Complete Beginner',
    2: 'Beginner',
    3: 'Intermediate',
    4: 'Good',
    5: 'Excellent',
  };


const UserProfile = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    
    return (
        <div>
            
            <Grid container spacing={2}>
            
          
                <Grid item xs={2} className={classes.sidebar}>
                    <div>User image</div>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  />
                    <br/>
                    <div>User name</div>
                    <br/>
                    <div>Short description</div>
                   
                </Grid>
               
                <Grid item xs={3} className={classes.skills}>
                    <div align="center">
                        <h1 style={{color: "#162521", fontFamily: "Josefin Sans"}}>Skills</h1>
                        </div>
                         <br/>
                    <div><Rating
                    
                        name="hover-feedback"
                        value={value}
                        precision={1}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                        setHover(newHover);
                        }}
                    />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
      </div>

      <div><Rating
                    
                        name="hover-feedback"
                        value={value}
                        precision={1}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                        setHover(newHover);
                        }}
                    />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
      </div>

      <div><Rating
                    
                        name="hover-feedback"
                        value={value}
                        precision={1}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                        setHover(newHover);
                        }}
                    />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
      </div>

      <div><Rating
                    
                    name="hover-feedback"
                    value={value}
                    precision={1}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                    setHover(newHover);
                    }}
                />
  {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
  </div>

                    
                    
                </Grid>
               
                <Grid item xs={4} className={classes.gitCollab}>
                    <div>
                        <h1 style={{color: "#162521", fontFamily: "Josefin Sans"}}>Git Collaborations</h1>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default UserProfile