import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { useSelector, useDispatch } from 'react-redux';

import CatFactList from '../../components/CatFactList';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockUseSelector = useSelector as jest.Mock;
const mockUseDispatch = useDispatch as jest.Mock;
const mockDispatch = jest.fn();

describe('CarFactList component', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    mockUseDispatch.mockImplementation(() => mockDispatch);
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());

    mockUseSelector.mockImplementation((cb) =>
      cb({
        catFacts: {
          data: [
            {
              _id: 'asdf23s2d1f',
              text: 'gato loves grace',
              upvotes: 8,
              user: null,
            },
            {
              _id: '96512312sf',
              text: 'Cats sleep 70% of their lives.',
              upvotes: 7,
              user: {
                name: {
                  first: 'Mateus',
                  last: 'Domingos',
                },
              },
            },
          ],
        },
      }),
    );

    wrapper = mount(<CatFactList />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should load the CatFact list', () => {
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should render CarFact list', () => {
    expect(wrapper.find('tbody').find('CatFactItem')).toHaveLength(2);
  });

  it('should render loading', () => {
    mockUseSelector.mockImplementation((cb) =>
      cb({
        catFacts: {
          loading: true,
        },
      }),
    );
    wrapper = mount(<CatFactList />);
    expect(wrapper.find('h2').text()).toEqual('Loading...');
    expect(wrapper).toMatchSnapshot();
  });
});
