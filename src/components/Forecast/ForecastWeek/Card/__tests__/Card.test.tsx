import React from 'react';
import Card from '../Card';
import { mount } from 'enzyme';
import { IDay } from '../../../../../Types';
import renderer from 'react-test-renderer';

describe('<Card/>', () => {
  const props: IDay = {
    temp: {
      day: 23,
      night: 20,
    },
    name: 'Tuesday',
    humidity: 23,
    pressure: 1000,
    weather: [
      {
        main: 'clouds',
      },
    ],
    wind_deg: 23,
    wind_speed: 2.3,
  };

  const wrapper = mount(<Card {...props} />);
  const tree = renderer.create(<Card {...props} />).toJSON();

  it('should render correctly', () => {
    expect(wrapper.find(`[aria-label='name']`).text()).toEqual(props.name);
    expect(wrapper.find(`[aria-label='temp-day']`).text()).toEqual(
      `${props.temp.day}`
    );
    expect(wrapper.find(`[aria-label='temp-night']`).text()).toEqual(
      `${props.temp.night}`
    );
    expect(wrapper.find(`[aria-label='humidity']`).text()).toEqual(
      `${props.humidity}`
    );
    expect(wrapper.find(`[aria-label='pressure']`).text()).toEqual(
      `${props.pressure}`
    );
    expect(wrapper.find(`[aria-label='wind_speed']`).text()).toEqual(
      `${props.wind_speed}`
    );
    expect(tree).toMatchSnapshot();
  });
});
