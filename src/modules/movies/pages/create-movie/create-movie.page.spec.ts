import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMoviePage } from './create-movie.page';

describe('CreateMoviePage', () => {
  let component: CreateMoviePage;
  let fixture: ComponentFixture<CreateMoviePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMoviePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
