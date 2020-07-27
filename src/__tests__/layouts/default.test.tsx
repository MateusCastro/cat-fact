import React from 'react';
import { shallow } from 'enzyme';
import DefaultLayout from '../../layouts/default';

describe('Layout component', () => {
  it('init', () => {
    shallow(<DefaultLayout />);
  });
});
