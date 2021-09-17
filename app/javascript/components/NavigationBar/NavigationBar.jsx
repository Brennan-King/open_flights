import React from 'react';
import {Link} from 'react-router-dom';
import airplane from '../../images/airplane.png';
import './NavigationBar.scss';

const openFlightsText = 'Open Flights';
const homeText = 'Home';
const aboutUsText = 'About Us';

/**
 * Constructs a navigation bar component used to navigate pages.
 * @return {node} a div containing the configured navigation bar
 */
const NavigationBar = () => {
  return (
    <div className="navigation-bar-container">
      <div className="navigation-bar-open-flights-text">{openFlightsText}</div>
      <img
        className="navigation-bar-airplane-image"
        src={airplane}
        alt="airplane"
      />
      <div className="link-container">
        <Link className="home-link" to="/">{homeText}</Link>
        <Link className="about-us-link" to="/about-us">{aboutUsText}</Link>
      </div>
    </div>
  );
};

export default NavigationBar;
