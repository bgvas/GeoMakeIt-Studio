import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSetupComponent } from './point-setup.component';

describe('PointSetupComponent', () => {
  let component: PointSetupComponent;
  let fixture: ComponentFixture<PointSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
