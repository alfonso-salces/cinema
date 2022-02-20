import * as fromActors from '../reducers/companies.reducer';
import { selectActorsState } from './companies.selectors';

describe('Actors Selectors', () => {
  it('should select the feature state', () => {
    const result = selectActorsState({
      [fromActors.actorsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
