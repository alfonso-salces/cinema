import * as fromActors from './companies.actions';

describe('yActorss', () => {
  it('should return an action', () => {
    expect(fromActors.yActorss().type).toBe('[Actors] Y Actorss');
  });
});
