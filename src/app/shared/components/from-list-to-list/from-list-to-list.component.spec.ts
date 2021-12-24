import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromListToListComponent } from './from-list-to-list.component';

describe('FromListToListComponent', () => {
  let component: FromListToListComponent;
  let fixture: ComponentFixture<FromListToListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromListToListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromListToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
