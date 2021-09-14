import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AirlineHeader from './AirlineHeader';
import './Airline.scss';

/**
 * Constructs an airline component used to display a specific airline.
 * @param {object} props the props used to configure the AirlineGridItem
 * @return {node} a div containing the configured airline
 */
const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const urlSlug = props.match.params.slug;
    const airlinesEndpoint = `/api/v1/airlines/${urlSlug}`;

    axios.get(airlinesEndpoint).then( (response) => setAirline(response.data))
        .catch( (response) => console.log(response));
  }, []);

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
        <div className="airline-review-form">[Review Form Goes Here.]</div>
      </div>
    </div>
  );
};

export default Airline;
