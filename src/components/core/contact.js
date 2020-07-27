import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
//import { Icon } from '@material-ui/core';
import archive from '../../assets/icons/albums.svg';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//import { sizing } from '@material-ui/system';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  marginTop:'10px',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(25),
      height: theme.spacing(25),
      },
  },

  image: {
    top: '1414px',
    left: '534px',
    width: '53px',
    height: '49px',
    justify: 'center',

  },
  title: {
    wrap: 'nowrap',
    // justify:'center',
    textAlign: 'center',
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (

    <Grid container justify="center" className={classes.root}>

      <Grid container>

        <Paper elevation={3} className={classes.title}>

          <img src={archive} alt="logo" className={classes.image} />
          <h4>Address</h4>
          <h6>
          455 West Orchard Street Kings
          Mountain, NC 28086
          </h6>
        </Paper>
      </Grid>

      <Grid container>
        <Paper elevation={3} className={classes.title}>
          <img src={archive} alt="logo" className={classes.image} />
          <h4>Phone</h4>
          <h6>
            (272) 211-7370 (524) 386-5730
          </h6>
        </Paper>
      </Grid>
      <Grid container>
        <Paper elevation={1} className={classes.title}>
          <img src={archive} alt="logo" className={classes.image} />
          <h4>Email</h4>
          <h6>
            support@yourbrand.com info@yourbrand.com
          </h6>
        </Paper>
      </Grid>
      <Grid container>
        <Paper elevation={1} className={classes.title}>
         <img src={archive} alt="logo" className={classes.image} />
          <h4>Fax</h4>
          <h6>
          (272) 211-7370 (524) 386-5730
          </h6>
        </Paper>
      </Grid>
    </Grid>
  );
}
