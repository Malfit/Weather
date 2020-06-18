import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentCityHourlyWeather } from '../../redux/actions/root.actions';
import './HourlyData.css';

const HourlyData = ({ lat, lon }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (lat && lon) {
      dispatch(getCurrentCityHourlyWeather(lat, lon));
    }
  }, [dispatch, lat, lon]);

  const currentCityHourlyWeather = useSelector((state) => state.hourlyData);
  const result = currentCityHourlyWeather.slice(-12);
  const calvin = 273.15;

  return (
    result.map((hour) => (
      <div
        className="hourTemp"
        style={{ marginBottom: Math.round(hour.temp - calvin) * 8 }}
        key={hour.dt}
      >
        <p>{Math.round(hour.temp - calvin)}</p>
      </div>

    )));
};

export default HourlyData;
