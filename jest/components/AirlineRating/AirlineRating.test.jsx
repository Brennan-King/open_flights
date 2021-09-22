/* eslint-disable max-len */
import 'jsdom-global/register';
import React from 'react';
import AirlineRating from '../../../app/javascript/components/AirlineRating/AirlineRating';
import {configure, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

/**
 * Test suite for AirlineRating component
 */
describe('AirlineRating', () => {
  it('should render an AirlineRating component with default props', () => {
    const component = mount(
        <AirlineRating />,
    );

    expect(component).toMatchSnapshot();
  });

  it('should render an AirlineRating component with a three star review', () => {
    const component = mount(
        <AirlineRating
          reviewScore={3}
        />,
    );

    expect(component).toMatchSnapshot();
  });

  it('should render an AirlineRating component with a five star review', () => {
    const component = mount(
        <AirlineRating
          reviewScore={5}
        />,
    );

    expect(component).toMatchSnapshot();
  });
});
