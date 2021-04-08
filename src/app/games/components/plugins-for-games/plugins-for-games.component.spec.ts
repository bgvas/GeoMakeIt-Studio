import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginsForGamesComponent } from './plugins-for-games.component';

describe('PluginsForGamesComponent', () => {
  let component: PluginsForGamesComponent;
  let fixture: ComponentFixture<PluginsForGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginsForGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginsForGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
