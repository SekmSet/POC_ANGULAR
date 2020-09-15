import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPokemonComponent } from './show-pokemon.component';

describe('PokemonComponent', () => {
  let component: ShowPokemonComponent;
  let fixture: ComponentFixture<ShowPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
