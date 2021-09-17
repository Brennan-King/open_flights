import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './DeleteReviewButton.scss';

const propTypes = {
  /** The id of the review */
  reviewId: PropTypes.number,
  /** Callback function to set delete button state */
  setDeleteButtonClicked: PropTypes.func,
};

const propDefaults = {
  reviewId: 0,
  setDeleteButtonClicked: () => {},
};

/**
 * Constructs a delete button component used to delete a specific review.
 * @param {object} props the props used to configure the component
 * @return {node} a div containing the configured delete button
 */
const DeleteReviewButton = (props) => {
  const {reviewId, setDeleteButtonClicked} = props;

  const onDeleteReviewButtonClick = () => {
    const csrfToken = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    axios.delete(`/api/v1/reviews/${reviewId}`);
    setDeleteButtonClicked(true);
  };

  return (
    <div
      className="delete-review-button"
      onClick={() => onDeleteReviewButtonClick()}
    >
      <div className="x-symbol">x</div>
    </div>
  );
};

DeleteReviewButton.propTypes = propTypes;
DeleteReviewButton.propDefaults = propDefaults;
export default DeleteReviewButton;
