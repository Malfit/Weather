import React from 'react';
import CitiesWeather from './pages/CitiesWeather';
import CurrentCityWeather from './pages/CurrentCityWeather';

const routes = [
  {
    path: '/weather-cities/:id',
    component: <CurrentCityWeather />,
  },
  {
    path: '/weather-cities',
    component: <CitiesWeather />,
    exact: true,
  },
];

export default routes;
