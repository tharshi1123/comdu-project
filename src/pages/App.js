import React from 'react';
import ButtonAppBar from '../components/core/appbar';
import InputBase from '../components/core/searchbar';
import LabelButtons from '../components/core/iconbutton';
import Card from '../components/layouts/division.js';
import Contact from '../components/core/contact';
import Paper2 from '../components/layouts/division2.js';
import imageText from '../components/layouts/rightsideImage.js';

import Lastform from '../components/core/lastform';
import Grid from '@material-ui/core/Grid';
//  import NestedGrid from '../components/core/test';
// import Imagetext from '../components/core/imagetext';

function App() {
  return (
    <Grid item xs={12}>
     {/* <ButtonAppBar />
    < InputBase />
      <LabelButtons />  */}
      <Card />
       <Paper2 />
       <imageText />
    {/* <Imagetext /> 
        <NestedGrid /> 
     <Contact />
    <Lastform />   */}

    </Grid>
  );
}

export default App;
