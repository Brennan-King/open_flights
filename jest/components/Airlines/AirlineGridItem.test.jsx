/* eslint-disable max-len */
import 'jsdom-global/register';
import React from 'react';
import AirlineGridItem from '../../../app/javascript/components/Airlines/AirlineGridItem';
import {BrowserRouter, Router} from 'react-router-dom';
import {configure, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

/**
 * Test suite for AirlineGridItem component
 */
describe('AirlineGridItem', () => {
  it('should render an AirlineGridItem component with default props', () => {
    const component = mount(
        <Router history={new BrowserRouter().history}>
          <AirlineGridItem />
        </Router>,
    );

    expect(component).toMatchSnapshot();
  });

  it('should render an AirlineGridItem component', () => {
    const component = mount(
        <Router history={new BrowserRouter().history}>
          <AirlineGridItem
            imageUrl="testImageUrl"
            name="testAirlineName"
            avgScore={5}
            slug="test-airline-name"
          />
        </Router>,
    );

    expect(component).toMatchSnapshot();
  });
});
