import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss'

class Shift extends React.Component {


  render() {
    const { details } = this.props;

    console.log(details);

    return (
      <div>
        shift it up a notch
      </div>
    )
  }
}

Shift.propTypes = {
  details: PropTypes.object,
  long: PropTypes.bool,
};

export default Shift;
