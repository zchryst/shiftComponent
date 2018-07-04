import React from 'react';

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

const shiftTwoDetails = {
  startTime: '9:15am',
  endTime: '2:00pm',
  role: 'Cowboy',
  alerts: {
    critical: ['snake in boot'],
    low: [],
  }
};


const Index = () => (
  <div>
    <Shift details={shiftOneDetails} />

    <Shift details={shiftTwoDetails} />

    <Shift details={shiftTwoDetails} long={true} />
  </div>
);

export default Index;
