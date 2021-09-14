import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AirlineHeader from './AirlineHeader';
import ReviewForm from './ReviewForm';
import './Airline.scss';

/**
 * Constructs an airline component used to display a specific airline.
 * @param {object} props the props used to configure the AirlineGridItem
 * @return {node} a div containing the configured airline
 */
const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [reviewFormInput, setReviewFormInput] = useState({});
  const [reviewFormRatingSelection, setReviewFormRatingSelection] = useState();

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const urlSlug = props.match.params.slug;
    const airlinesEndpoint = `/api/v1/airlines/${urlSlug}`;

    axios.get(airlinesEndpoint).then( (response) => setAirline(response.data))
        .catch( (response) => console.log(response));
  }, []);

  const onReviewFormInputChange = (event) => {
    event.preventDefault();
    setReviewFormInput(Object.assign({}, reviewFormInput,
        {[event.target.name]: event.target.value}));
  };

  const onReviewFormSubmit = (event) => {
    event.preventDefault();

    const csrfToken = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    const review = {
      title: reviewFormInput.title,
      description: reviewFormInput.description,
      score: reviewFormRatingSelection,
      airline_id: airline.id,
    };

    axios.post('/api/v1/reviews', {review});
  };

  return (
    <div className="airline-container">
      <div className="airline-column">
        <div className="airline-header-container">
          {
            !!airline && <AirlineHeader airlineAttributes={airline}/>
          }
          <div className="airline-reviews"></div>
        </div>
      </div>
      <div className="airline-column">
        <div className="airline-review-form">
          <ReviewForm
            onReviewFormInputChange={onReviewFormInputChange}
            onReviewFormSubmit={onReviewFormSubmit}
            setReviewFormRating={setReviewFormRatingSelection}
            airlineAttributes={airline}
          />
        </div>
      </div>
    </div>
  );
};

export default Airline;
