import React, { Component } from 'react';
import Card from '../../components/core/rightSideImageNew';
import { withStyles } from '@material-ui/styles';
import archive from '../../assets/icons/archive.svg';
import album from '../../assets/icons/albums.svg';
import finger from '../../assets/icons/fingerprint.svg';
import { Typography } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import { isEmpty } from 'lodash';

const styles = (theme) => ({
  Header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  data: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > :nth-child(n+1)': {
      margin: '16px',
    },
  },
  head: {
    textAlign: 'center',
    font: ' Bold 35px/45px PT Sans',
    letterSpacing: '0',
    color: '#212529',
    opacity: '1',
    [theme.breakpoints.down('sm')]: {
      font: ' Bold 24px/32px PT Sans',
    },
  },
  para: {
    textAlign: 'center',
    font: ' Regular 18px/27px PT Sans',
    letterSpacing: 0,
    color: '#868E96',
    opacity: '1',
    webkitLineClamp: '2' /* number of lines to show */,
    webkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
  },
});

class PaperSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount = () => {
    const cards = [
      {
        chip: 'District population',
        title:
          'This should be used to tell a story and let your users know more about your service. How can you benefit them?',
        text: 'rtrty',
        image: archive,
      },
    
    ];
    this.setState({
      cards,
    });
  };

  render() {
    const { classes } = this.props;
    const { cards } = this.state;
    console.log(cards, '=====================')

    return (
      <div className={classes.data}>
         
       {!isEmpty(cards) &&
          cards.map((item) => {
            return <Card data={item} />;
          })}
      </div>
    );
  }
}

export default withStyles(styles)(PaperSetup);