import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AirlineGridItem from './AirlineGridItem';
import './Airlines.scss';

const AIRLINES_ENDPOINT = '/api/v1/airlines.json';
const AIRLINES_HEADER = 'Open Flights';
const AIRLINES_SUB_HEADER = 'Honest, unbiased airlines reviews';

/**
 * Constructs a component used to display a grid of airlines.
 * @return {node} a div containing the configured Airlines component
 */
const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios.get(AIRLINES_ENDPOINT)
        .then( (response) => {
          setAirlines(response.data);
        })
        .catch( (response) => console.log(response));
  }, [airlines.length]);

  const getAirlinesGrid = () => {
    if (airlines) {
      return airlines.map((airline, index) => {
        return (
          <div key={index}>
            <AirlineGridItem
              imageUrl={airline.image_url}
              name={airline.name}
              avgScore={airline.avg_score}
              slug={airline.slug}
            />
          </div>
        );
      });
    }
  };

  return (
    <div className='airlines-container'>
      <div className='airlines-header'>{AIRLINES_HEADER}</div>
      <div className='airlines-sub-header'>{AIRLINES_SUB_HEADER}</div>
      <div className='airlines-grid'>
        {getAirlinesGrid()}
      </div>
    </div>
  );
};

export default Airlines;
