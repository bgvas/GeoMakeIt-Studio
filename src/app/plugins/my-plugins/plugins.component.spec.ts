import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginsComponent } from './plug-ins.component';

describe('PlugInsComponent', () => {
  let component: PluginsComponent;
  let fixture: ComponentFixture<PluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
