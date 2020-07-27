import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '58px',
    height: '48px',
    background: '0% 0% no-repeat padding-box',
    opacity: '1',
    marginTop: '64px ',
  },

  main: {
    width: '370px',
    height: '323px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    radius: '12px',
    opacity: '1',
    textAlign: 'center',
    '&:hover': {
      boxShadow: '0px 12px 32px #383B470F',
      border: '0.24px solid #DDDDDD80',
    },
  },
  ChipLabel: {
    color: '#4DB6AC',
  },
  ChipRoot: {
    backgroundColor: '#4DB6AC1F',
  },
  text: {
    margin: '10px',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '2',
    overflow: 'hidden',
  },

  title: {
    textAlign: 'center',
    font: ' Bold 20px/30px PT Sans',
    letterSpacing: 0,
    color: '#212529',
    opacity: '1',
    //padding:'30px',
    margin: '20px  30px',
  },
}));

const Card2 = (props) => {
  const classes = useStyles(props);
  const { image, title, text, datasets } = props.data;
  return (
    <div className={classes.main}>
      <img src={image} alt="logo" className={classes.image} />
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
      <Typography className={classes.text} variant="subtitle1">
        {text}
      </Typography>
      {datasets > 0 && (
        <Chip
          classes={{
            label: classes.ChipLabel,
            root: classes.ChipRoot,
          }}
          label={`${datasets} DATASETS`}
          bolian="flase"
        />
      )}
    </div>
  );
};

export default Card2;