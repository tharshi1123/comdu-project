import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    //  height: '100vh',
  },
  button: {
    //top: '6025px',
    // left: '376px',
    width: '157px',
    height: '45px',
    background: ' #FE9D00 0% 0% no-repeat padding-box',
    MozBorderRadius: '4px',
    opacity: '1',
  },
}));

function PublicLayout(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid
      item
      classes={{
        root: classes.root,
      }}
    >
      {matches && (
        <Grid item sm={12} md={6}>
          <div className={classes.container}>
            <Box align="center" px={10}>
              <Typography variant="h4">{props.title}</Typography>
              <Typography variant="subtitle1">{props.text}</Typography>
              <Button href={props.href} className={classes.button}>
                {props.button}
              </Button>
            </Box>
          </div>
        </Grid>
      )}
    </Grid>
  );
}

export default PublicLayout;
