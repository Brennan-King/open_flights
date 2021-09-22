/* eslint-disable max-len */
import React from 'react';
import AboutUs from '../../../app/javascript/components/AboutUs/AboutUs';
import renderer from 'react-test-renderer';

/**
 * Test suite for AboutUs component
 */
describe('AboutUs', () => {
  it('should render an AboutUs component', () => {
    const component = renderer.create(<AboutUs />);
    const aboutUs = component.toJSON();

    expect(aboutUs).toMatchSnapshot();
  });
});
