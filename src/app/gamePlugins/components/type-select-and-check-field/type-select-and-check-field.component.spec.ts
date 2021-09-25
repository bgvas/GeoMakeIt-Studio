import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSelectAndCheckFieldComponent } from './type-select-and-check-field.component';

describe('TypeSelectAndCheckFieldComponent', () => {
  let component: TypeSelectAndCheckFieldComponent;
  let fixture: ComponentFixture<TypeSelectAndCheckFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeSelectAndCheckFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSelectAndCheckFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
