import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectList = createSelector(
  rootSelector,
  ({ list }) => list
);

export const selectListError = createSelector(
  rootSelector,
  ({ error }) => error
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading
);

export const selectFilm = createSelector(
  rootSelector,
  ({ film }) => film
);

export const selectPlanet = createSelector(
  rootSelector,
  ({ planets }) => planets
);

export const selectCharacters = createSelector(
  rootSelector,
  ({ characters }) => characters
);

export const selectStarships = createSelector(
  rootSelector,
  ({ starships }) => starships
);

export const selectVehicles = createSelector(
  rootSelector,
  ({ planets }) => planets
);

export const selectSpecies = createSelector(
  rootSelector,
  ({ species }) => species
);
