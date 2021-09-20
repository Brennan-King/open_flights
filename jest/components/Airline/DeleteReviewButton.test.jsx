/* eslint-disable max-len */
import 'jsdom-global/register';
import React from 'react';
import DeleteReviewButton from '../../../app/javascript/components/Airline/DeleteReviewButton';
import {configure, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

/**
 * Test suite for DeleteReviewButton component
 */
describe('DeleteReviewButton', () => {
  it('should render a DeleteReviewButton component', () => {
    const component = mount(
        <DeleteReviewButton
          reviewId={0}
          setDeleteButtonClicked={()=>{}}
        />,
    );

    expect(component).toMatchSnapshot();
  });

  it('should delete a review', () => {
    const mockSetDeleteButtonClicked = jest.fn();

    const component = mount(
        <DeleteReviewButton
          reviewId={0}
          setDeleteButtonClicked={mockSetDeleteButtonClicked}
        />,
    );

    component.find('#delete-review-button').simulate('click');
    expect(mockSetDeleteButtonClicked).toHaveBeenCalledTimes(1);
    expect(component).toMatchSnapshot();
  });
});
