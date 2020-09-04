import React from 'react';
import Temperature, { ITemperature } from '../Temperature';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('<Temperature/>', () => {
  const props: ITemperature = {
    temp: 23,
    description: 'Clouds',
  };
  const wrapper = mount(<Temperature {...props} />);
  const tree = renderer.create(<Temperature {...props} />).toJSON();

  it('should render props correctly', () => {
    expect(wrapper.find(`[aria-label='temp']`).text()).toEqual(
      props.temp + ' °C'
    );
    expect(wrapper.find(`[aria-label='desc']`).text()).toEqual(
      props.description
    );
    expect(tree).toMatchSnapshot();
  });
});
