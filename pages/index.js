import React from 'react';
import PropTypes from 'prop-types';

import Shift from '../components/Shift/Shift';

const shiftOneDetails = {
  startTime: '9:15am',
  endTime: '5:00pm',
  role: 'Head chef',
  alerts: {
    critical: ['something very bad', 'something even worse'],
    low: ['something far less important that you\'ll probably ignore', 'something inconsequential'],
  }
};


const Index = () => (
  <div>
    Hello world

    <Shift details={shiftOneDetails} />
  </div>
);

export default Index;
