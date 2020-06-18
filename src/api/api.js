import * as axios from 'axios';

const BASE_CONNECTION = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const api = {
  getCitiesWeatherList: (stringCities) => BASE_CONNECTION
    .get(`group?id=${stringCities.join(',')}
    &units=metric&appid=4d769d0cc5b88e3c873289a6e140ec2a`),
  getOneCityWeather: (id) => BASE_CONNECTION
    .get(`/weather?id=${id}&appid=4d769d0cc5b88e3c873289a6e140ec2a`),
  getNewOneCityWeather: (name) => BASE_CONNECTION
    .get(`/weather?q=${name}&appid=4d769d0cc5b88e3c873289a6e140ec2a`),
  getOneCityHourlyWeather: (lat, lon) => BASE_CONNECTION
    .get(`onecall?lat=${lat}&lon=${lon}&exclude=hourly
      .temp&appid=4d769d0cc5b88e3c873289a6e140ec2a`),
};

export default api;
