import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CityWeather from '../../components/CityWeather';
import {
  getCitiesWeatherData, getNewCityWeather,
} from '../../redux/actions/root.actions';
import './CitiesWeather.css';

const CitiesWeather = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);

  useEffect(() => {
    dispatch(getCitiesWeatherData(cities));
  }, [dispatch, cities]);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('allCities'))) {
      localStorage.setItem('allCities', JSON.stringify(cities));
    }
  });

  const citiesWeather = useSelector((state) => state.data);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div className="addNewCity">
        <span className="inpBtn">
          <input
            className="inputCity"
            placeholder="type name of new city..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="buttonAdd"
            type="button"
            onClick={() => dispatch(getNewCityWeather(inputValue))
              && setInputValue('')}
          >
            Add
          </button>
        </span>
      </div>
      <div className="wrapper">
        { citiesWeather
          && citiesWeather.map((item) => (
            <div key={item.id}>
              <CityWeather data={item} />
            </div>
          ))}
      </div>
    </>
  );
};

export default CitiesWeather;
