import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './AirlineGridItem.scss';

const AIRLINE_GRID_ITEM_BUTTON_TEXT = 'View Airline';

const propTypes = {
  /** The url of the airline image. */
  imageUrl: PropTypes.string,
  /** The name of the airline. */
  name: PropTypes.string,
  /** The average score rating for the airline. */
  avgScore: PropTypes.number,
  /** The name formatted with dashes between words. */
  slug: PropTypes.string,
};

const propDefaults = {
  imageUrl: '',
  name: '',
  avgScore: 0,
  slug: '',
};

/**
 * Constructs an airline grid item to be placed within a grid.
 * @param {object} props the props used to configure the airline grid item
 * @return {node} a div containing the configured AirglinGridItem
 */
const AirlineGridItem = (props) => {
  const {imageUrl, name, avgScore, slug} = props;

  const airlineAverageScoreText = `Average Rating: ${avgScore}`;

  return (
    <div className="airline-grid-item-card">
      <div className="airline-grid-item-logo-container">
        <img className='airline-grid-item-logo' src={imageUrl} alt={name} />
      </div>
      <div className="airline-grid-item-name">{name}</div>
      <div className="airline-score">{airlineAverageScoreText}</div>
      <div className="airline-grid-item-link-container">
        <Link className="airline-grid-item-link" to={`/airlines/${slug}`}>
          {AIRLINE_GRID_ITEM_BUTTON_TEXT}
        </Link>
      </div>
    </div>
  );
};

AirlineGridItem.propTypes = propTypes;
AirlineGridItem.defaultProps = propDefaults;
export default AirlineGridItem;
