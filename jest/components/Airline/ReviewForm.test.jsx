/* eslint-disable max-len */
import 'jsdom-global/register';
import React from 'react';
import ReviewForm from '../../../app/javascript/components/Airline/ReviewForm';
import {configure, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

/**
 * Test suite for ReviewForm component
 */
describe('ReviewForm', () => {
  it('should render a ReviewForm component with default props', () => {
    const component = mount(
        <ReviewForm />,
    );

    expect(component).toMatchSnapshot();
  });

  it('should render a ReviewForm component', () => {
    const component = mount(
        <ReviewForm
          onReviewFormInputChange={()=>{}}
          onReviewFormSubmit={()=>{}}
          airlineAttributes={{name: 'testAirlineName'}}
          setReviewFormRating={()=>{}}
        />,
    );

    expect(component).toMatchSnapshot();
  });

  it('should handle form input change', () => {
    const mockOnReviewFormInputChange = jest.fn();

    const component = mount(
        <ReviewForm
          onReviewFormInputChange={mockOnReviewFormInputChange}
          onReviewFormSubmit={()=>{}}
          airlineAttributes={{name: 'testAirlineName'}}
          setReviewFormRating={()=>{}}
        />,
    );

    component.find('#review-form-title-input').simulate('change', {target: {value: 'Title', name: 'title'}});
    component.find('#review-form-description-input').simulate('change', {target: {value: 'Description', name: 'description'}});
    expect(mockOnReviewFormInputChange).toHaveBeenCalledTimes(2);
    expect(component).toMatchSnapshot();
  });

  it('should handle form submit', () => {
    const mockOnReviewFormSubmit = jest.fn();

    const component = mount(
        <ReviewForm
          onReviewFormInputChange={()=>{}}
          onReviewFormSubmit={mockOnReviewFormSubmit}
          airlineAttributes={{name: 'testAirlineName'}}
          setReviewFormRating={()=>{}}
        />,
    );

    component.find('#review-form').simulate('submit');
    expect(mockOnReviewFormSubmit).toHaveBeenCalledTimes(1);
    expect(component).toMatchSnapshot();
  });

  it('should set review form rating', () => {
    const mockSetReviewFormRating = jest.fn();

    const component = mount(
        <ReviewForm
          onReviewFormInputChange={()=>{}}
          onReviewFormSubmit={()=>{}}
          airlineAttributes={{name: 'testAirlineName'}}
          setReviewFormRating={mockSetReviewFormRating}
        />,
    );

    component.find('#review-form-rating-label').first().simulate('click');
    expect(mockSetReviewFormRating).toHaveBeenCalledTimes(1);
    expect(component).toMatchSnapshot();
  });
});
