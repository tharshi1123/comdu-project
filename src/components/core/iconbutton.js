import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
//import SaveIcon from '@material-ui/icons/Save';
import homeimg from '../../assets/images/fornt-Img.png';
import { ReactComponent as ReactLogo } from '../../assets/icons/archive.svg';
import { ReactComponent as ReactLogo1 } from '../../assets/icons/watch.svg';
//import  {ReactComponent as Album}   from '../../assets/icons/albums.svg';
import { ReactComponent as Album1 } from '../../assets/icons/delivery-truck.svg';
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#FFFFFF',
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<ReactLogo />}
      >
        Attendance
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<ReactLogo1 />}
      >
        Timesheets
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<Album1 />}
      >
        Employees
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<Album1 />}
      >
        Suppliers
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
      >
        Many more…
      </Button>

      <Grid justify="center">
        <img src={homeimg} alt="logo" />
      </Grid>
    </Grid>
  );
}
