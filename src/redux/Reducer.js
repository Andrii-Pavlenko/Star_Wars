import uuid from 'uuid';
import { ACTION_TYPES } from './Actions';

const initialState = {
  isLoading: false,
  error: false,
  initialized: false,
  list: null,
  film: null,
  planets: null,
  characters: null,
  starships: null,
  vehicles: null,
  species: null,
};

const setOtherInSate = (data, state) => {
  if (data[0].population) {
    return {
      ...state,
      error: false,
      planets: data.map(item => ({
        ...item,
        id: uuid(), 
      })),
    };
  } else if (data[0].vehicle_class) {
    return {
      ...state,
      error: false,
      vehicles: data.map(item => ({
        ...item,
        id: uuid(), 
      })),
    };
  } else if (data[0].mass) {
    return {
      ...state,
      error: false,
      characters: data.map(item => ({
        ...item,
        id: uuid(), 
      })),
    };
  } else if (data[0].classification) {
    return {
      ...state,
      error: false,
      species: data.map(item => ({
        ...item,
        id: uuid(), 
      })),
    };
  } else if (data[0].starship_class) {
    return {
      ...state,
      error: false,
      starships: data.map(item => ({
        ...item,
        id: uuid(), 
      })),
    };
  } else {
    return state;
  }
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVE: {
      const { payload } = action;

      return {
        ...state,
        error: false,
        film: null,
        planets: null,
        characters: null,
        starships: null,
        vehicles: null,
        species: null,
        list: payload.map(item => ({
            ...item,
            id: uuid(), 
        })),
      };
    }

    case ACTION_TYPES.SAVE_OTHER: {
      const { payload } = action;
      return setOtherInSate(payload, state)     
    }

    case ACTION_TYPES.SET_LOAD_ERROR: {
      return {
        ...state,
        error: true,
        film: null,
        planets: null,
        characters: null,
        starships: null,
        vehicles: null,
        species: null,
        list: null,
      };
    }

    case ACTION_TYPES.START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ACTION_TYPES.STOP_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case ACTION_TYPES.SEARCH: {      
      const { payload } = action;

      return {
        ...state,
        list: state.list.filter(
          ({ title }) => title.toLowerCase().includes(payload.toLowerCase())
        ),
      };
    }

    case ACTION_TYPES.SORT: {
      return {
        ...state,
        list: state.list.slice().sort(
          (a, b) => a.title.localeCompare(b.title)
        ),
      };
    }

    case ACTION_TYPES.FILM_TO_SHOW: {
      const { payload } = action;

      return {
        ...state,
        film: state.list[payload].id,
      };
    }

    default:
      return state;
  }
}