import React from 'react';
import Navbar from '../Navbar';
import renderer from 'react-test-renderer';

describe('<Navbar />', () => {
  const onKeyPress = jest.fn();
  const ref = null;

  const tree = renderer
    .create(<Navbar onKeyPress={onKeyPress} searchRef={ref} />)
    .toJSON();

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
