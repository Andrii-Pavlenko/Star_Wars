import uuid from 'uuid';

export const setOtherInSate = (data, state) => {
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