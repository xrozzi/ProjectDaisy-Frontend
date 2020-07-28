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
        borderRadius: 10,
        borderColor: '#fff',
        backgroundColor: '#f2f2f2',
        alignItems: "center"
    },
    skills: {
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(1,1),
        border: 1,
        borderRadius: 10,
        borderColor: '#fff',
        backgroundColor: '#f2f2f2',
        alignItems: "center"
  
    },
    gitCollab: {
        eight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(1,1),
        borderRadius: 10,
        borderColor: '#fff',
        backgroundColor: '#f2f2f2',
        alignItems: "center",
    },
    divider: {
      margin: theme.spacing(2, 1)
    },


  }));

  const labels = {
    // 0.5: 'Complete Beginner',
    1: 'Complete Beginner+',
    // 1.5: 'Beginner',
    2: 'Beginner',
    // 2.5: 'Ok',
    3: 'Intermediate',
    // 3.5: 'Good',
    4: 'Good',
    // 4.5: 'Excellent',
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
                        Skills
                        </div>
                         <br/>
                        <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    


                    
                    
                </Grid>
                <Grid item xs={2} className={classes.skills} >
                    
                    <div>
                        Blogs posted
                    </div>
                </Grid>
                <Grid item xs={4} className={classes.gitCollab}>
                    <div>
                        Git collaborations
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default UserProfile