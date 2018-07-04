import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

import styles from './styles.scss'

class Shift extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showAlerts: false,
    };
  }

  renderAlerts(severity) {
    const { details } = this.props;

    if (details.alerts[severity].length === 0) {
      return null;
    }

    const message = details.alerts[severity].length === 1 ? (
        `${details.alerts[severity].length} ${severity.toUpperCase()} ALERT`
    ) : (
        `${details.alerts[severity].length} ${severity.toUpperCase()} ALERTS`
    );

    return (
      <div className={cc([styles.alert, styles[severity]])}>
        {message}
      </div>
    )
  }

  handleAlertClick = () => {
    this.setState({ showAlerts: !this.state.showAlerts });

    console.log(this.state.showAlerts)
  };

  render() {
    const { details, long } = this.props;
    const { showAlerts } = this.state;

    console.log(details);
    console.log(details.alerts.low.length);

    return (
      <div className={cc([styles.shiftCard, long ? styles.long : null])}>
        <div className={styles.details}>
          <div>{details.startTime} - {details.endTime}</div>
          <div>{details.role}</div>
        </div>

        <div
          className={cc([styles.alerts, showAlerts ? styles.show : false])}
          onClick={this.handleAlertClick}>
          {this.renderAlerts('critical')}
          {this.renderAlerts('low')}
        </div>
      </div>
    )
  }
}

Shift.propTypes = {
  details: PropTypes.shape({
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    alerts: PropTypes.shape({
      critical: PropTypes.array.isRequired,
      low: PropTypes.array.isRequired,
    })
  }),
  long: PropTypes.bool,
};

export default Shift;
