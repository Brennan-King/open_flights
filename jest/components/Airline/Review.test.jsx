/* eslint-disable max-len */
import 'jsdom-global/register';
import React from 'react';
import Review from '../../../app/javascript/components/Airline/Review';
import {configure, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

/**
 * Test suite for Review component
 */
describe('Review', () => {
  it('should render a Review component with default props', () => {
    const component = mount(
        <Review />,
    );

    expect(component).toMatchSnapshot();
  });

  it('should render a Review component', () => {
    const component = mount(
        <Review
          reviewTitle="testReviewTitle"
          reviewDescription="testReviewDescription"
          reviewScore={5}
          reviewId={1}
          setDeleteButtonClicked={()=>{}}
        />,
    );

    expect(component).toMatchSnapshot();
  });
});
