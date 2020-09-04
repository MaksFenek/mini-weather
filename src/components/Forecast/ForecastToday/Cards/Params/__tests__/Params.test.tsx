import React from 'react';
import Params, { IParams } from '../Params';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('<Params/>', () => {
  const props: IParams = {
    humidity: 40,
    pressure: 1000,
    wind: {
      speed: 2.3,
      deg: 120,
    },
  };

  const wrapper = mount(<Params {...props} />);
  const tree = renderer.create(<Params {...props} />).toJSON();

  it('should render correctly', () => {
    expect(wrapper.find(`[aria-label='humidity']`).text()).toEqual(
      `${props.humidity}`
    );
    expect(wrapper.find(`[aria-label='pressure']`).text()).toEqual(
      `${props.pressure}`
    );
    expect(wrapper.find(`[aria-label='wind']`).text()).toEqual(
      `${props.wind.speed}`
    );
    expect(tree).toMatchSnapshot();
  });
});
