import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeomakeitHelpComponent } from './geomakeit-help.component';

describe('GeomakeitHelpComponent', () => {
  let component: GeomakeitHelpComponent;
  let fixture: ComponentFixture<GeomakeitHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeomakeitHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeomakeitHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
