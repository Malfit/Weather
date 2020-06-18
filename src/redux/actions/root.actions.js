import api from '../../api/api';

export const GET_NEW_CITY_WEATHER_REQUEST = 'GET_NEW_CITY_WEATHER_REQUEST';
export const GET_NEW_CITY_WEATHER_SUCCESS = 'GET_NEW_CITY_WEATHER_SUCCESS';
export const GET_NEW_CITY_WEATHER_FAIL = 'GET_NEW_CITY_WEATHER_FAIL';
export const GET_CITIES_WEATHER_REQUEST = 'GET_CITIES_WEATHER_REQUEST';
export const GET_CITIES_WEATHER_SUCCESS = 'GET_CITIES_WEATHER_SUCCESS';
export const GET_CITIES_WEATHER_FAIL = 'GET_CITIES_WEATHER_FAIL';
export const DELETE_CITY_WEATHER_SUCCESS = 'GET_CITY_WEATHER_FAIL';
export const DELETE_CITY_WEATHER_FAIL = 'GET_CITY_WEATHER_FAIL';
export const GET_ONE_CITY_WEATHER_REQUEST = 'GET_ONE_CITY_WEATHER_REQUEST';
export const GET_ONE_CITY_WEATHER_SUCCESS = 'GET_ONE_CITY_WEATHER_SUCCESS';
export const GET_ONE_CITY_WEATHER_FAIL = 'GET_ONE_CITY_WEATHER_FAIL';
export const
  GET_ONE_CITY_HOURLY_WEATHER_REQUEST = 'GET_ONE_CITY_HOURLY_WEATHER_REQUEST';
export const
  GET_ONE_CITY_HOURLY_WEATHER_SUCCESS = 'GET_ONE_CITY_HOURLY_WEATHER_SUCCESS';
export const
  GET_ONE_CITY_HOURLY_WEATHER_FAIL = 'GET_ONE_CITY_HOURLY_WEATHER_FAIL';

export const getCitiesWeatherData = (cities) => async (dispatch) => {
  dispatch({
    type: GET_CITIES_WEATHER_REQUEST,
  });
  try {
    const response = await api.getCitiesWeatherList(cities);
    dispatch({
      type: GET_CITIES_WEATHER_SUCCESS,
      payload: response.data.list,
    });
  } catch (err) {
    dispatch({
      type: GET_CITIES_WEATHER_FAIL,
      payload: err,
      error: true,
    });
  }
};

export const getCurrentCityWeather = (id) => async (dispatch) => {
  dispatch({
    type: GET_ONE_CITY_WEATHER_REQUEST,
  });
  try {
    const response = await api.getOneCityWeather(id);
    dispatch({
      type: GET_ONE_CITY_WEATHER_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ONE_CITY_WEATHER_FAIL,
      payload: err,
      error: true,
    });
  }
};

export const getCurrentCityHourlyWeather = (lat, lon) => async (dispatch) => {
  dispatch({
    type: GET_ONE_CITY_HOURLY_WEATHER_REQUEST,
  });
  try {
    const response = await api.getOneCityHourlyWeather(lat, lon);
    dispatch({
      type: GET_ONE_CITY_HOURLY_WEATHER_SUCCESS,
      payload: response.data.hourly,
    });
  } catch (err) {
    dispatch({
      type: GET_ONE_CITY_HOURLY_WEATHER_FAIL,
      payload: err,
      error: true,
    });
  }
};

export const getNewCityWeather = (name) => async (dispatch) => {
  dispatch({
    type: GET_NEW_CITY_WEATHER_REQUEST,
  });
  try {
    const response = await api.getNewOneCityWeather(name);
    let currentData = localStorage.getItem('allCities');
    currentData = [response.data.id, ...JSON.parse(currentData)];
    localStorage.setItem('allCities', JSON.stringify(currentData));
    dispatch({
      type: GET_NEW_CITY_WEATHER_SUCCESS,
      payload: response.data.id,
    });
  } catch (err) {
    dispatch({
      type: GET_NEW_CITY_WEATHER_FAIL,
      payload: err,
      error: true,
    });
  }
};

export const deleteCityWeather = (id) => (dispatch) => {
  dispatch({
    type: DELETE_CITY_WEATHER_SUCCESS,
    payload: id,
  });
};
