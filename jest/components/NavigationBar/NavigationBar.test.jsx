/* eslint-disable max-len */
import 'jsdom-global/register';
import React from 'react';
import NavigationBar from '../../../app/javascript/components/NavigationBar/NavigationBar';
import {BrowserRouter, Router} from 'react-router-dom';
import {configure, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

/**
 * Test suite for NavigationBar component
 */
describe('NavigationBar', () => {
  it('should render a NavigationBar component', () => {
    const component = mount(
        <Router history={new BrowserRouter().history}>
          <NavigationBar />
        </Router>,
    );

    expect(component).toMatchSnapshot();
  });
});
