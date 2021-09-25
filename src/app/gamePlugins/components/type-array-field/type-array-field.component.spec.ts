import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeArrayFieldComponent } from './type-array-field.component';

describe('TypeArrayFieldComponent', () => {
  let component: TypeArrayFieldComponent;
  let fixture: ComponentFixture<TypeArrayFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeArrayFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeArrayFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
