import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMainConfigurationModalComponent } from './game-main-configuration-modal.component';

describe('GameMainConfigurationModalComponent', () => {
  let component: GameMainConfigurationModalComponent;
  let fixture: ComponentFixture<GameMainConfigurationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameMainConfigurationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMainConfigurationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
