import React from 'react';
import { mount } from 'enzyme';

import { MemoryRouter } from 'react-router-dom';

import Routes from '../routes';
import ValidPath from '../pages/ValidPath';
import NotFound from '../pages/NotFound';

describe('Routes component', () => {
  test('valid path should not redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[{ pathname: '/valid' }]}>
        <Routes />
      </MemoryRouter>,
    );
    expect(wrapper.find(ValidPath)).toHaveLength(1);
  });

  it('invalid path should redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <Routes />
      </MemoryRouter>,
    );
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
