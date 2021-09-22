/* eslint-disable max-len */
import 'jsdom-global/register';
import React from 'react';
import AirlineHeader from '../../../app/javascript/components/Airline/AirlineHeader';
import {configure, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

/**
 * Test suite for AirlineHeader component
 */
describe('AirlineHeader', () => {
  it('should render an AirlineHeader component with deafult props', () => {
    const component = mount(
        <AirlineHeader />,
    );

    expect(component).toMatchSnapshot();
  });

  it('should render an AirlineHeader component with airline attributes', () => {
    const component = mount(
        <AirlineHeader
          airlineAttributes={
            {
              name: 'testAirlineName',
              image_url: 'testImageUrl',
              avg_score: 5,
              reviews: [],
            }
          }
        />,
    );

    expect(component).toMatchSnapshot();
  });
});
