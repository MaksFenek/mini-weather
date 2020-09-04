import React from 'react';
import ForecastWeek from '../ForecastWeek';
import { mount } from 'enzyme';
import { IDay } from '../../../../Types';
import renderer from 'react-test-renderer';

describe('<ForecastWeek />', () => {
  const week: IDay[] = [
    {
      name: 'Monday',
      temp: {
        day: 13,
        night: 13,
      },
      pressure: 13,
      humidity: 13,
      weather: [
        {
          main: 'clouds',
        },
      ],
      wind_speed: 13,
      wind_deg: 13,
    },
    {
      name: 'Tuesday',
      temp: {
        day: 13,
        night: 13,
      },
      pressure: 13,
      humidity: 13,
      weather: [
        {
          main: 'clear',
        },
      ],
      wind_speed: 13,
      wind_deg: 13,
    },
  ];

  const wrapper = mount(<ForecastWeek week={...week} />);
  const tree = renderer.create(<ForecastWeek week={...week} />).toJSON();
  it('contains all own children', () => {
    expect(wrapper.find(`[aria-label='week']`).children()).toHaveLength(2);
    expect(tree).toMatchSnapshot();
  });
});
