import * as fromActors from '../reducers/actors.reducer';
import { selectActorsState } from './actors.selectors';

describe('Actors Selectors', () => {
  it('should select the feature state', () => {
    const result = selectActorsState({
      [fromActors.actorsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
