import React, { Component } from 'react';
import PublicLayout from './button';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import SimpleAccordion from './accordion';
import InsightsDistrictCard from '../../components/layouts/imagetextlayout.js';
import diasporaImage from '../../assets/images/chaptertwo.svg';
import chaptertwo from '../../assets/images/chaptertwo.svg';
import chapterone from '../../assets/images/chapterone.svg';
import Button from '@material-ui/core/Button';

import signinImage from '../../assets/images/Signin.png';
import Complete from '../../assets/images/Complete.png';

import Rightimagecard from '../../components/layouts/rightsideImage.js';

const styles = (theme) => ({
  logo: {
    width: '159px',
    height: '38px',
    border: '0',
    marginBottom: '50px',
    [theme.breakpoints.down('md')]: {
      width:'200px',
      margin: 'auto',
    },
  },
  button: {
    width: '130px',
    height: '32px',
    background: '#FFEFE5 0% 0% no-repeat padding-box',
    borderRadius: '16px',
    opacity: '1',
    textAlign: 'center',
    font: 'Regular 16px/24px Roboto',
    letterSpacing: '0px',
    color: '#FE9D00',
    opacity: ' 1',
    marginLeft: '900px',
  },
  button2: {
    width: '130px',
    height: '32px',
    background: '#FFEFE5 0% 0% no-repeat padding-box',
    borderRadius: '16px',
    opacity: '1',
    textAlign: 'center',
    font: 'Regular 16px/24px Roboto',
    letterSpacing: '0px',
    color: '#FE9D00',
    opacity: ' 1',
    marginLeft: '1000px',
  },
  cart: {
    maxWidth: '700px',
    width: '100%',
    padding: '50px',
    maxHeight: '200px',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});

class Login extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={3} xs={2}>
        <Grid item   xs={12}
          sm={6}
          md={12}
          lg={6}className={classes.cart}>
          <Grid>
            <Button variant="contained" size="small" className={classes.button}>
              Who we are?
            </Button>
            <InsightsDistrictCard
              image={diasporaImage}
              title="Solving million-dollar problem"
              text="Committed to the sustainable development of the traditional Tamil homelands in Sri Lanka. We currently operate in Canada and Germany. Our mission is to help shift diaspora engagement from charity to sustainability, from aid to economic development, and from supporting remittance economies to building knowledge economies."
              list="American shorthair tabby russian blue. Turkish Angora leopard yet malkin."
            ></InsightsDistrictCard>
          </Grid>
         
          <Grid>
            <Button
              variant="contained"
              size="small"
              className={classes.button2}
            >
              What we do?
            </Button>
            <Rightimagecard
              image={signinImage}
              title="Collect data and make it available to anyone"
              text="Tharuvu is a data visualization portal for anyone, We collect and organize public data and let anyone access it in a seamless way. American shorthair tabby russian blue. Turkish Angora leopard yet malkin. American shorthair tabby russian blue. Turkish Angora leopard yet malkin.American shorthair tabby russian blue."
              list="American shorthair tabby russian blue. Turkish Angora leopard yet malkin."
            ></Rightimagecard>
          </Grid>
        
          <Grid>
            <Button variant="contained" size="small" className={classes.button}>
              Why we do?
            </Button>
            <InsightsDistrictCard
              image={chapterone}
              title="Collect data and make it available to anyone"
              text="Tharuvu is a data visualization portal for anyone, We collect and organize public data and let anyone access it in a seamless way. American shorthair tabby russian blue. Turkish Angora leopard yet malkin. American shorthair tabby russian blue. Turkish Angora leopard yet malkin.American shorthair tabby russian blue."
              list="American shorthair tabby russian blue. Turkish Angora leopard yet malkin."
            ></InsightsDistrictCard>
          </Grid>
          
          <Grid>
            <Button
              variant="contained"
              size="small"
              className={classes.button2}
            >
              How we do it?
            </Button>
            <Rightimagecard
              image={Complete}
              title="Collect data and make it available to anyone"
              text="Tharuvu is a data visualization portal for anyone, We collect and organize public data and let anyone access it in a seamless way. American shorthair tabby russian blue. Turkish Angora leopard yet malkin. American shorthair tabby russian blue. Turkish Angora leopard yet malkin.American shorthair tabby russian blue."
              list="American shorthair tabby russian blue. Turkish Angora leopard yet malkin."
            ></Rightimagecard>
          </Grid>
          <Grid></Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Login);
