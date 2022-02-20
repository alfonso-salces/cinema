import * as fromActors from './actors.actions';

describe('yActorss', () => {
  it('should return an action', () => {
    expect(fromActors.yActorss().type).toBe('[Actors] Y Actorss');
  });
});
