import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AirlineHeader from './AirlineHeader';
import ReviewForm from './ReviewForm';
import Review from './Review';
import './Airline.scss';

/**
 * Constructs an airline component used to display a specific airline.
 * @param {object} props the props used to configure the airline
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
  }, [reviewFormRatingSelection]);

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
    setReviewFormRatingSelection(0);
  };

  const getAirlineReviews = () => {
    let airlineReviews;
    if (airline.reviews) {
      airlineReviews = airline.reviews.map((airlineReview, index) => {
        return (
          <Review
            key={index}
            reviewTitle={airlineReview.title}
            reviewDescription={airlineReview.description}
            reviewScore={airlineReview.score}
          />
        );
      });
    }

    return airlineReviews;
  };

  return (
    <div className="airline-container">
      <div className="airline-column">
        <div className="airline-header-container">
          {
            !!airline && <AirlineHeader airlineAttributes={airline}/>
          }
          {getAirlineReviews()}
        </div>
      </div>
      <div className="airline-column">
        <div>
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
