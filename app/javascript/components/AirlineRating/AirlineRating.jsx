import React from 'react';
import PropTypes from 'prop-types';
import './AirlineRating.scss';

const propTypes = {
  /** The score of the review */
  reviewScore: PropTypes.number,
};

const propDefaults = {
  reviewScore: '',
};

/**
 * Constructs an airline rating component used to display the
 * rating of a specific airline.
 * @param {object} props the props used to configure the airline rating
 * @return {node} a div containing the configured airline rating
 */
const AirlineRating = (props) => {
  const {reviewScore} = props;

  const buildAirlinelineRating = () => {
    const airlineRatings = [];

    for (let scoreIndex = 0; scoreIndex < reviewScore; scoreIndex++) {
      airlineRatings.push(
          <div className="airline-rating-filled-in" />,
      );
    }
    for (let scoreIndex = 0; scoreIndex < 5 - reviewScore; scoreIndex++) {
      airlineRatings.push(
          <div className="airline-rating-not-filled-in" />,
      );
    }

    return (airlineRatings);
  };

  return (
    <span className="airline-rating-wrapper">
      {buildAirlinelineRating()}
    </span>
  );
};

AirlineRating.propTypes = propTypes;
AirlineRating.propDefaults = propDefaults;
export default AirlineRating;
