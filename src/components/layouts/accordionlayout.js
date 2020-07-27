import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

// import InputButton from '../core/InputButton';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import {  useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(40),
    },
  },

  main :{
    wrap:'nowrap',
    textAlign:'center',
marginLeft:'200px',
marginTop:'300px',
width:'200px'

  },
  title:{
    textAlign: 'center',
    font:' Bold 20px/30px PT Sans',
    letterSpacing: 0,
    color: '#212529',
    opacity: '1',
    marginLeft:'200px',

width:'400px'
  },
  text:{
width:'500px',
height:'300px',
marginLeft:'100px',
padding:'29px',

},
grid:{
  height:'150px',
}


}));
function Accordionlayouts(props) {
  const classes = useStyles(props);
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
<Grid className={classes.grid}>

                  <Typography className={classes.title} variant="h5">{props.title}</Typography>
                  <Typography className={classes.text} variant="subtitle1">{props.text}</Typography>

</Grid>


  );
}
export default Accordionlayouts;
