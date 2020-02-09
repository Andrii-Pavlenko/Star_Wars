import uuid from 'uuid';
import { ACTION_TYPES } from './Actions';
import { setOtherInSate } from './setOtherInSate';

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