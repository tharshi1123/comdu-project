import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logos/comduit-logo.png';
import { Grid } from '@material-ui/core';
//import useMediaQuery from '@material-ui/core/useMediaQuery';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
      margin:' 40px 310px 100px 310px',
  },

  logo: {
    flexGrow: 1,
  },
  login: {
    background: '#EF483E 0% 0% no-repeat padding-box',
    borderRadius: '23px',
    opacity: '1',
    width: '132px',
    height: '46px',
    color: 'white',
  },
  title: {
    justifycontent: 'flex-end',
     //marginLeft:'54px',
    //width: '188px',
    //height:'  64px',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  //const matches = useMediaQuery('(min-width:600px)');
  return (
    <Grid item xs={12}>
      <div className={classes.root}>
      <AppBar
          position="static"
          style={{ background: 'transparent', boxShadow: 'none' }}
        >
           <Toolbar>
            <Grid className={classes.logo}>
              <img src={logo} alt="logo" />
            </Grid>
            <Button color="black" className={classes.title}>
              Home
            </Button>
            <Button color="black" className={classes.title}>
              Portfolio
            </Button>
            <Button color="black" className={classes.title}>
              BLOG
            </Button>
            <Button color="black" className={classes.title}>
              CONTACT
            </Button>
            <Button className={classes.login}>LOGIN</Button>
          </Toolbar>
        </AppBar>
      </div>
    </Grid>
  );
}
