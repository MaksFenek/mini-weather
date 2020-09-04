import React from 'react';
import ForecastToday from '../ForecastToday';
import { mount } from 'enzyme';
import Temperature from '../Cards/Temperature/Temperature';
import Params from '../Cards/Params/Params';
import renderer from 'react-test-renderer';

describe('<ForecastToday/>', () => {
  const city = 'Toronto';
  const date = {
    name: 'Monday',
    day: 13,
    month: 'January',
  };
  const temp = 23;
  const description = 'Clouds';
  const humidity = 40;
  const pressure = 1000;
  const wind = {
    speed: 2.3,
    deg: 120,
  };

  const wrapper = mount(
    <ForecastToday city={city} date={date}>
      <Temperature temp={temp} description={description} />
      <Params humidity={humidity} pressure={pressure} wind={wind} />
    </ForecastToday>
  );
  const tree = renderer
    .create(
      <ForecastToday city={city} date={date}>
        <Temperature temp={temp} description={description} />
        <Params humidity={humidity} pressure={pressure} wind={wind} />
      </ForecastToday>
    )
    .toJSON();
  it('should render correctly', () => {
    expect(wrapper.find(`[aria-label='city']`).text()).toEqual(city);
    expect(wrapper.find(`[aria-label='date']`).text()).toEqual(
      `${date.day} ${date.month}, ${date.name}`
    );
    expect(wrapper.find(`[aria-label='children']`).children()).toHaveLength(2);
    expect(wrapper).toMatchSnapshot();
  });
});
