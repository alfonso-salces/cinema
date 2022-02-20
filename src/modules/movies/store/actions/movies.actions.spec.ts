import { getMovies } from './movies.actions';

describe('getMovies', () => {
  it('should return an action', () => {
    expect(getMovies().type).toBe('[Movies] GET MOVIES');
  });
});
