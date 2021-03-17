import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipInfoCircleComponent } from './tooltip-info-circle.component';

describe('TooltipInfoCircleComponent', () => {
  let component: TooltipInfoCircleComponent;
  let fixture: ComponentFixture<TooltipInfoCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipInfoCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipInfoCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
