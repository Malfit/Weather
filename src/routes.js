import React from 'react';
import CitiesWeather from './pages/CitiesWeather';
import CurrentCityWeather from './pages/CurrentCityWeather';

const routes = [
  {
    path: '/Weather/:id',
    component: <CurrentCityWeather />,
  },
  {
    path: '/Weather',
    component: <CitiesWeather />,
    exact: true,
  },
];

export default routes;
