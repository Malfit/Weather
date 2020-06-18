import {
  DELETE_CITY_WEATHER_SUCCESS, GET_CITIES_WEATHER_SUCCESS,
  GET_NEW_CITY_WEATHER_SUCCESS, GET_ONE_CITY_WEATHER_SUCCESS,
  GET_ONE_CITY_HOURLY_WEATHER_SUCCESS,
} from '../actions/root.actions';

const initialCities = [2643743, 2761369, 625144, 727011,
  3054643, 2950159, 264371, 3117735, 5134295, 456173,
  2759794, 703448, 2988507, 3067696, 2673730];

const initialState = {
  data: [],
  currentCity: {},
  cities: !JSON.parse(localStorage.getItem('allCities'))
    ? initialCities
    : JSON.parse(localStorage.getItem('allCities')),
  hourlyData: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES_WEATHER_SUCCESS: {
      const citiesdata = action.payload.map((item) => ({
        id: item.id,
        name: item.name,
        temperature: Math.round(item.main.temp),
        icon: item.weather[0].icon,
      }));
      return {
        ...state,
        data: [...citiesdata],
      };
    }
    case GET_ONE_CITY_WEATHER_SUCCESS: {
      const citydata = {
        id: action.payload.id,
        name: action.payload.name,
        temperature: Math.round(action.payload.main.temp),
        icon: action.payload.weather[0].icon,
        humidity: action.payload.main.humidity,
        pressure: action.payload.main.pressure,
        wind: action.payload.wind.speed,
        lat: action.payload.coord.lat,
        lon: action.payload.coord.lon,
      };
      return {
        ...state,
        currentCity: citydata,
      };
    }
    case GET_NEW_CITY_WEATHER_SUCCESS: {
      if (state.cities.includes(action.payload.id)) {
        return state;
      }
      const obj = {
        id: action.payload.id,
        name: action.payload.name,
        temperature: Math.round(action.payload.main.temp),
        icon: action.payload.weather[0].icon,
      };
      return {
        ...state,
        cities: [action.payload.id, ...state.cities],
        data: [obj, ...state.data],
      };
    }
    case GET_ONE_CITY_HOURLY_WEATHER_SUCCESS: {
      return {
        ...state, hourlyData: [...action.payload],
      };
    }
    case DELETE_CITY_WEATHER_SUCCESS: {
      const outputArray = state.cities
        .filter((city) => city !== action.payload);
      localStorage.setItem('allCities', JSON.stringify(outputArray));
      const outputArrayData = state.data
        .filter((city) => city.id !== action.payload);
      return {
        ...state,
        cities: outputArray,
        data: outputArrayData,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
