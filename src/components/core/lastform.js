import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputField from '../core/input';
import Button from '../core/button';
const useStyles = makeStyles((theme) =>
  createStyles({
    forgotText: {
      fontSize: '14px',
      letterSpacing: '0',
      fontWeight: 400,
      color: '#4E598348',
      paddingBottom: '16px',
    },
    apiError: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ff1744',
      fontSize: '14px',
    },
    formCart: {
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      borderRadius: '4px',
      justifyContent: 'center',
      opacity: 1,
      padding: '12px',
      width: '50px',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        '& > :nth-child(n+1)': {},
      },
      but: {
        padding: '102px',
      },
      head: {
        width: '200px',
        height: '50px',
        marginLeft: '300px'
      },
      button: {
        textAlign: 'center',
        font: ' Bold 15px/24px PT Sans',
        letterSpacing: '0px',
        color: '#FFFFFF',
        marginTop: '10px',
        marginLeft: '200px',
        textTransform: 'uppercase',
        opacity: '1',
        width: '157px',
        height: '45px',
        background: ' #FE9D00 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        opacity: ' 1',
      },

    },
  })
);

const LoginForm = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.form}>

      <h1 className="head">Tell us about yourself</h1>
      <h6>Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.</h6>

      <Grid container className={classes.grid} item xs={12} sm={6} md={12} lg={6} >
        <Grid
          container
          xs={12}
          sm={6}
          md={12}
          lg={6}
          className={classes.formCart}
        >
          <InputField
            id={'name'}
            name={'name'}
            type={'text'}
            label={'YOUR NAME'}
            placeholder={'Enter Name'}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          md={12}
          lg={6}
          className={classes.formCart}
        >
          {' '}
          <InputField
            id={'email'}
            name={'email'}
            type={'text'}
            label={'YOUR EMAIL ADDRESS'}
            placeholder={'Email'}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          md={12}
          lg={6}
          className={classes.formCart}
        >
          {' '}
          <InputField
            id={'subject'}
            name={'subjrct'}
            type={'text'}
            label={'SUBJECT'}
            placeholder={'UI/UX Design'}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          md={12}
          lg={6}
          className={classes.formCart}
        >
          {' '}
          <InputField
            id={'phone'}
            name={'phone'}
            type={'number'}
            label={'YOUR PHONE NUMBER'}
            placeholder={'Number'}
          />
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12} className={classes.helps}>
          <InputField
            id={'help'}
            name={'help'}
            type={'text'}
            label={'HOW CAN WE HELP YOU?'}
            placeholder={'Help'}

          />
        </Grid>
        <Grid container item xs={12} sm={6} md={12} lg={6}>
          <Button className={classes.button}>Contact us</Button>

        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
