import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import './ReviewForm.scss';

const propTypes = {
  /** Callback function to handle review form input change */
  onReviewFormInputChange: PropTypes.func,
  /** Callback function to handle review form submit */
  onReviewFormSubmit: PropTypes.func,
  /** Object containing an airline's attributes */
  airlineAttributes: PropTypes.object,
  /** Callback function to set review form rating */
  setReviewFormRating: PropTypes.func,
};

const propDefaults = {
  onReviewFormInputChange: () => {},
  onReviewFormSubmit: () => {},
  airlineAttributes: {},
  setReviewFormRating: () => {},
};

/**
 * Constructs a review form used to create reviews for a specific airline.
 * @param {object} props the props used to configure the review form
 * @return {node} a div containing the configured review form
 */
const ReviewForm = (props) => {
  const {
    onReviewFormInputChange,
    onReviewFormSubmit,
    airlineAttributes,
    setReviewFormRating,
  } = props;

  const [selection, setSelection] = useState(undefined);

  const airlineName = airlineAttributes.name;
  const airlineImageUrl = airlineAttributes.image_url;
  const airlineAverageScore = airlineAttributes.avg_score;
  const airlineFormText = `Have and experience ` +
  ` with ${airlineName}? Share your review!`;
  const airlineFormStarRatingText = 'Rate This Airline';
  const airlineFormButtonText = 'Submit Your Review';

  const onReviewFormRatingSelection = (reviewScore) => {
    setReviewFormRating(reviewScore);
    setSelection(reviewScore);
  };

  const reviewFormRatingOptions = [5, 4, 3, 2, 1].map((reviewScore, index) => {
    return (
      <Fragment key={index}>
        <input
          className="review-form-rating-options-input"
          type="radio"
          value={reviewScore}
          name="rating"
          id={`rating-${reviewScore}`}
          checked={selection == reviewScore}
        />
        <label
          className="review-form-rating-options-label"
          onClick={() => onReviewFormRatingSelection(reviewScore)}
        />
      </Fragment>
    );
  });

  return (
    <div className="review-form-container">
      <form onSubmit={onReviewFormSubmit}>
        <div className="review-form-headline">{airlineFormText}</div>
        <div className="review-form-inputs-container">
          <input
            className="review-form-title-input"
            type="text"
            name="title"
            placeholder="Review Title"
            onChange={onReviewFormInputChange}
          />
        </div>
        <div className="review-form-inputs-container">
          <input
            className = "review-form-description-text-area"
            type="text"
            name="description"
            placeholder="Review Description"
            onChange={onReviewFormInputChange}
          />
        </div>
        <div className="">
          <div className="review-form-rating-container" >
            <div className="review-form-rating-title-text">
              {airlineFormStarRatingText}
            </div>
            <div className="review-form-rating-options">
              {reviewFormRatingOptions}
            </div>
          </div>
        </div>
        <button
          className="review-form-submit-button"
          type="submit"
        >
          {airlineFormButtonText}
        </button>
      </form>
    </div>
  );
};

ReviewForm.propTypes = propTypes;
ReviewForm.propDefaults = propDefaults;
export default ReviewForm;
