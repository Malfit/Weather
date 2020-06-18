import * as axios from 'axios';

const BASE_CONNECTION = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const appId = '4d769d0cc5b88e3c873289a6e140ec2a';

const api = {
  getCitiesWeatherList: (stringCities) => BASE_CONNECTION
    .get(`group?id=${stringCities
      .join(',')}&units=metric&appid=${appId}`),
  getOneCityWeather: (id) => BASE_CONNECTION
    .get(`/weather?id=${id}&appid=${appId}`),
  getNewOneCityWeather: (name) => BASE_CONNECTION
    .get(`/weather?q=${name}&units=metric&appid=${appId}`),
  getOneCityHourlyWeather: (lat, lon) => BASE_CONNECTION
    .get(`onecall?lat=${lat}&lon=${lon}&exclude=hourly
      .temp&appid=${appId}`),
};

export default api;
