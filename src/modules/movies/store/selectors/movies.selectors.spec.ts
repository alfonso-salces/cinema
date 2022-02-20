import { selectMoviesState } from './movies.selectors';

describe('Actors Selectors', () => {
  it('should select the feature state', () => {
    const state = { movies: null, filters: null };
    const result = selectMoviesState(state);

    expect(result).toEqual(state);
  });
});
