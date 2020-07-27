import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    textAlign: 'center',
    flexGrow: 1,
  },
  input: {
    alignItems: 'center',
    flex: 1,
    textAlign: 'center',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: ' 0.75px solid #3F44511F',
    borderRadius: '4px',
    opacity: '1',
    width: '300px',
    height: '44px',
    marginLeft:'350px'
    
  },
  h4: {
    textAlign: 'center',
    font: 'Bold 36px/55px Poppins',
    letterSpacing: '0px',
    color: '#22242A',
    opacity: '1',
  },
  h6: {
    textAlign: 'center',
    font: 'Light 16px/25px Poppins',
    letterSpacing: '0px',
    color: '#181D33',
    opacity: '1',
    marginTop: '4px',
  },
  button: {
    borderRadius: '4px',
    opacity: '1',
    width: '140px',
    height: '44px',
    marginLeft:'8px'
  }
}));

const Searchbar = (props) => {
  const classes = useStyles(props);

  return (
    <div>
      <Typography variant="h4" align="center" classes={{
        h4: classes.h4
      }}>Open data portal for anyone!</Typography>
      <Typography variant="h6" align="center" classes={{
        h6: classes.h6
      }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</Typography>
      <InputBase
        className={classes.input}
        placeholder="Email address"
        inputProps={{ 'aria-label': 'Email address' }}
      />

      <Button variant="contained" color="primary" className={classes.button}>
        AUTOMATE
           </Button>
    </div>
  );
}

export default Searchbar;

// export default function CustomizedInputBase() {
//   const classes = useStyles();

//   return (
//     <Grid container justify="center">
//       <Grid item xs={3}>
//         <h1>Open data portal for anyone!</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
//         <Paper component="form" className={classes.root}>
//           <InputBase
//             className={classes.input}
//             placeholder="Email address"
//             inputProps={{ 'aria-label': 'Email address' }}
//           />

//           <Button variant="contained" color="primary">
//             AUTOMATE
//           </Button>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// }
