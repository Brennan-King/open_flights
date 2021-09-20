/* eslint-disable max-len */
import 'jsdom-global/register';
import React from 'react';
import Airlines from '../../../app/javascript/components/Airlines/Airlines';
import {configure, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {act} from 'react-dom/test-utils';
import * as axios from 'axios';

configure({adapter: new Adapter()});
jest.mock('axios');

/**
 * Test suite for Airlines component
 */
describe('Airlines', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render an Airlines component when the service successfully returns data', async () => {
    let component;
    axios.get.mockImplementation(() => Promise.resolve({data: [{
      id: '123',
      name: 'testAirlineName',
      image_url: 'testAirlineImageUrl',
      avg_score: 4.5,
      reviews: [{
        title: 'testReviewTitle',
        description: 'testReviewDescription',
        score: 3,
        id: '456',
      }],
    }]}));

    await act(async () => {
      component = mount(
          <Airlines />,
      );
    });
    await component.update();

    expect(component).toMatchSnapshot();
  });

  it('should render an Airlines component when the service unsuccessfully returns data', async () => {
    let component;
    axios.get.mockImplementation(() => Promise.reject(new Error('Service call failed')));

    await act(async () => {
      component = mount(
          <Airlines />,
      );
    });
    await component.update();

    expect(component).toMatchSnapshot();
  });
});
