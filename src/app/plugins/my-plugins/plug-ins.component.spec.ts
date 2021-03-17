import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlugInsComponent } from './plug-ins.component';

describe('PlugInsComponent', () => {
  let component: PlugInsComponent;
  let fixture: ComponentFixture<PlugInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlugInsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlugInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
