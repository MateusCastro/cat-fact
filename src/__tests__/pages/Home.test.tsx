import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../pages/Home';

describe('page Home', () => {
  it('init', () => {
    shallow(<Home />);
  });
});
