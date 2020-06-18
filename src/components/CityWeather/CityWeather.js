import { faSync, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  deleteCityWeather, getCurrentCityWeather,
} from '../../redux/actions/root.actions';
import './CityWeather.css';

const CityWeather = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <div className="cityweather">
        <div>{data.name}</div>
        <span className="syncdel">
          <FontAwesomeIcon
            icon={faSync}
            className="synchronization"
            onClick={() => dispatch(getCurrentCityWeather(data.id))}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="deleteCity"
            onClick={() => dispatch(deleteCityWeather(data.id))}
          />
        </span>
        <span>
          {data.temperature}
          {'\u2103'}
          <img
            src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
            alt="img"
          />
        </span>
        <Link to={`/Weather/${data.id}`}>
          <Button type="primary" className="btnAddMore">
            More data
          </Button>
        </Link>

      </div>
    </div>
  );
};

export default CityWeather;
