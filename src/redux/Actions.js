import axios from 'axios';
export const ACTION_TYPES = {
  SAVE: 'SAVE',
  SET_LOAD_ERROR: 'SET_LOAD_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  SEARCH: 'SEARCH',
  SORT: 'SORT',
  FILM_TO_SHOW: 'FILM_TO_SHOW',
  SAVE_OTHER: 'SAVE_OTHER',
};

const save = data => ({
  type: ACTION_TYPES.SAVE,
  payload: data,
});

const savePlanets = data => ({
  type: ACTION_TYPES.SAVE_OTHER,
  payload: data,
});

const setError = error => ({
  type: ACTION_TYPES.SET_LOAD_ERROR,
  payload: error,
});

const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTION_TYPES.STOP_LOADING,
});

const search = value => ({
  type: ACTION_TYPES.SEARCH,
  payload: value,
});

const filmToShow = id => ({
  type: ACTION_TYPES.FILM_TO_SHOW,
  payload: id,
});

const sort = () => ({
  type: ACTION_TYPES.SORT,
});

export const sortHeros = () => (dispatch) => {
  dispatch(sort());
};

export const showFilm = (index) => (dispatch) => {
  dispatch(filmToShow(index));
};

export const searchHeros = value => (dispatch) => {
  dispatch(search(value));
};

export const otherURL = data => (dispatch) => {
  dispatch(startLoading(data));

  const promises = data.map(data => fetch(data).then(y => y.json()));

  Promise.all(promises).then((results) => {
    dispatch(savePlanets(results));
  })
    .catch(error => dispatch(setError(error.message)))
    .finally(() => dispatch(stopLoading()));
};

export const listURL = () => (dispatch) => {
  dispatch(startLoading());
  let people = [];
  // first page
  return axios("https://swapi.dev/api/films/")
    .then(response => {
        // collect people from first page
        people = response.data.results;
        return response.data.count;
    })
    .then(count => {
        // exclude the first request
        const numberOfPagesLeft = Math.ceil((count - 1) / 10);
        let promises = [];
        // start at 2 as you already queried the first page
        for (let i = 2; i <= numberOfPagesLeft; i++) {
            promises.push(axios(`https://swapi.co/api/films?page=${i}`));
        }
        return Promise.all(promises);
    })
    .then(response => {
        //get the rest records - pages 2 through n.
        people = response.reduce((acc, data) => [...acc, ...data.data.results], people);
        dispatch(save(people));
    })
    .catch(error => dispatch(setError(error.message)))
  .finally(() => dispatch(stopLoading()));
};
