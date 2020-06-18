import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import HourlyData from '../../components/HourlyData';
import { getCurrentCityWeather } from '../../redux/actions/root.actions';
import './CurrentCityWeather.css';

const CurrentCityWeather = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCurrentCityWeather(id));
  }, [dispatch, id]);

  const currentCityWeather = useSelector((state) => state.currentCity);

  return (
    currentCityWeather
        && (
          <div className="secondPage">
            <div className="arrowBack">
              <Link to="/Weather">
                <FontAwesomeIcon
                  icon={faArrowCircleLeft}
                />
              </Link>
            </div>
            <div className="wrapper_">
              <div className="currentCity_">
                <p>{currentCityWeather.name}</p>
                <p>
                  Temperature
                  {' '}
                  {currentCityWeather.temperature - 273}
                  {' '}
                  {'\u2103'}
                </p>
                <p>
                  <img
                    src={`http://openweathermap.org/img/wn/${currentCityWeather
                      .icon}@2x.png`}
                    alt="img"
                  />
                </p>
                <p>
                  Humidity
                  {' '}
                  {currentCityWeather.humidity}
                  {' '}
                  %
                </p>
                <p>
                  Pressure
                  {' '}
                  {currentCityWeather.pressure}
                  {' '}
                  hpa
                </p>
                <p>
                  Wind
                  {' '}
                  {currentCityWeather.wind}
                  {' '}
                  m/s
                </p>
              </div>
              <div className="hourly">
                <HourlyData
                  lat={currentCityWeather.lat}
                  lon={currentCityWeather.lon}
                />
              </div>
            </div>
          </div>
        )
  );
};

export default CurrentCityWeather;
