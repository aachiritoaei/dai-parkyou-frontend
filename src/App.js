import React from 'react';
import SignInSide from './SignInSide';
import MenuSide from './MenuSide';
import ViewReservedParkingSpots from './ViewReservedParkingSpots';
import ReserveSpotSide from './ReserveSpotSide';

import { BrowserRouter, Route } from 'react-router-dom';
import ViewEvents from './ViewEvents';
import ReportEvent from './ReportEvent';

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={SignInSide} />
      <Route path='/menu' component={MenuSide} />
      <Route path='/view-reserved-parking-spots' component={ViewReservedParkingSpots} />
      <Route path='/reserve' component={ReserveSpotSide} />
      <Route path='/view-events' component={ViewEvents} />
      <Route path='/report-event' component={ReportEvent} />
    </BrowserRouter>
  );
}
