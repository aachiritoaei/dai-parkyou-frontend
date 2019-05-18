import React from 'react';
import SignInSide from './SignInSide';
import MenuSide from './MenuSide';
import ViewReservedParkingSpots from './ViewReservedParkingSpots';
import ReserveSpotSide from './ReserveSpotSide';

import { Provider } from 'react-redux'

import { BrowserRouter, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={SignInSide} />
      <Route path='/menu' component={MenuSide} />
      <Route path='/view-reserved-parking-spots' component={ViewReservedParkingSpots} />
      <Route path='/reserve' component={ReserveSpotSide} />
    </BrowserRouter>
  );
}
