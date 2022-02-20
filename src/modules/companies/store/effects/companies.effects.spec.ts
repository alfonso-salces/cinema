import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ActorsEffects } from './companies.effects';

describe('ActorsEffects', () => {
  let actions$: Observable<any>;
  let effects: ActorsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ActorsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ActorsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
