import React from 'react';
import PropTypes from 'prop-types';
import AirlineRating from '../AirlineRating/AirlineRating';
import DeleteReviewButton from './DeleteReviewButton';
import reviewIcon from '../../images/reviewIcon.png';
import './Review.scss';

const propTypes = {
  /** The title of the review */
  reviewTitle: PropTypes.string,
  /** The description of the review */
  reviewDescription: PropTypes.string,
  /** The score of the review */
  reviewScore: PropTypes.number,
  /** The id of the review */
  reviewId: PropTypes.number,
  /** Callback function to set delete button state */
  setDeleteButtonClicked: PropTypes.func,
};

const propDefaults = {
  reviewTitle: '',
  reviewDescription: '',
  reviewScore: 0,
  reviewId: 0,
  setDeleteButtonClicked: () => {},
};

/**
 * Constructs a review component used to display a specific review.
 * @param {object} props the props used to configure the review
 * @return {node} a div containing the configured review
 */
const Review = (props) => {
  const {reviewTitle,
    reviewDescription,
    reviewScore,
    reviewId,
    setDeleteButtonClicked,
  } = props;

  return (
    <div className="review-card">
      <div className="review-rating-container">
        <img
          className="review-icon"
          src={reviewIcon}
          alt="reviewIcon"
        />
        <AirlineRating
          reviewScore={reviewScore}
        />
        <DeleteReviewButton
          reviewId={reviewId}
          setDeleteButtonClicked={setDeleteButtonClicked}
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
