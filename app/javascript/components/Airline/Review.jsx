import React from 'react';
import PropTypes from 'prop-types';
import AirlineRating from '../AirlineRating/AirlineRating';
import './Review.scss';

const propTypes = {
  /** The title of the review */
  reviewTitle: PropTypes.string,
  /** The description of the review */
  reviewDescription: PropTypes.string,
  /** The score of the review */
  reviewScore: PropTypes.number,
};

const propDefaults = {
  reviewTitle: '',
  reviewDescription: '',
  reviewScore: '',
};

/**
 * Constructs a review component used to display a specific review.
 * @param {object} props the props used to configure the review
 * @return {node} a div containing the configured review
 */
const Review = (props) => {
  const {reviewTitle, reviewDescription, reviewScore} = props;

  return (
    <div className="review-card">
      <div className="review-rating-container">
        <AirlineRating
          reviewScore={reviewScore}
        />
      </div>
      <div className="review-title">{reviewTitle}</div>
      <div className="review-description">{reviewDescription}</div>
    </div>
  );
};

Review.propTypes = propTypes;
Review.propDefaults = propDefaults;
export default Review;
