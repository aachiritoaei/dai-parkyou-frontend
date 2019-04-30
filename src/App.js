import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from './ProTip';
import Link from '@material-ui/core/Link';

import SignInSide from './SignInSide';
import MenuSide from './MenuSide';
import ReportEventSide from './ReportEventSide';
import ReserveSpotSide from './ReserveSpotSide';

import { BrowserRouter, Route } from 'react-router-dom';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

export default function App() {
  return (
    <BrowserRouter>
        <Route exact path='/' component={SignInSide} />
        <Route path='/menu' component={MenuSide} />
        {/* <Route path='/report' component={ReportEventSide} /> */}
        {/* <Route path='/reserve' component={ReserveSpotSide} /> */}
    </BrowserRouter>
    // <Container maxWidth="sm">
    //   <Box my={4}>
    //     <Typography variant="h4" component="h1" gutterBottom>
    //       Create React App v4-alpha example
    //     </Typography>
    //     <ProTip />
    //     <MadeWithLove />
    //   </Box>
    // </Container>
  );
}
