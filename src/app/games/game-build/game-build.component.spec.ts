import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBuildComponent } from './game-build.component';

describe('GameBuildComponent', () => {
  let component: GameBuildComponent;
  let fixture: ComponentFixture<GameBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameBuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
