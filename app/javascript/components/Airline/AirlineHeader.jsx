import React from 'react';
import PropTypes from 'prop-types';
import './AirlineHeader.scss';

const propTypes = {
  /** Object containing an airline's attributes. */
  airlineAttributes: PropTypes.object,
};

const propDefaults = {
  airlineAttributes: {},
};

/**
 * Constructs an airline header component used to render a header
 * for a specific airline.
 * @param {object} props the props used to configure the airline header
 * @return {node} a div containing the configured airline header
 */
const AirlineHeader = (props) => {
  const {airlineAttributes} = props;
  const airlineName = airlineAttributes.name;
  const airlineImageUrl = airlineAttributes.image_url;
  const airlineAverageScore = airlineAttributes.avg_score;
  const totalAirlineReviews = airlineAttributes.reviews ?
    airlineAttributes.reviews.length : 0;
  const totalAirlineReviewsText = `${totalAirlineReviews} user reviews`;
  const airlineRatingOutOfFiveText = `${airlineAverageScore} out of 5`;

  return (
    <div className="airline-header-container">
      <h1 className="airline-header">
        <img
          className="airline-header-image"
          src={airlineImageUrl}
          alt={airlineName} />
        {airlineName}
      </h1>
      <div>
        <div className="airline-total-reviews">
          {airlineRatingOutOfFiveText}
        </div>
        <div className="airline-rating-out-of-five">
          {totalAirlineReviewsText}
        </div>
      </div>
    </div>
  );
};

AirlineHeader.propDefaults = propDefaults;
AirlineHeader.propTypes = propTypes;
export default AirlineHeader;
