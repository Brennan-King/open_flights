import React from 'react';
import aboutUsImageOne from '../../images/aboutUsImageOne.jpg';
import aboutUsImageTwo from '../../images/aboutUsImageTwo.jpeg';
import aboutUsImageThree from '../../images/aboutUsImageThree.jpg';
import {aboutUsParagraphOneText, aboutUsParagragphTwoText} from './AboutUsText';
import './AboutUs.scss';

/**
 * Constructs a static about us page.
 * @return {node} a div containing the configured about us page
 */
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-header">Our Mission</h1>
      <p className="about-us-paragraph">{aboutUsParagraphOneText}</p>
      <div>
        <img
          className="about-us-image"
          src={aboutUsImageOne}
          alt="aboutUsAirplane"
        />
        <img
          className="about-us-image"
          src={aboutUsImageTwo}
          alt="aboutUsAirplane"
        />
      </div>
      <p className="about-us-paragraph">{aboutUsParagragphTwoText}</p>
      <div>
        <img
          className="about-us-image"
          src={aboutUsImageThree}
          alt="aboutUsAirplane"
        />
      </div>
    </div>
  );
};

export default AboutUs;
