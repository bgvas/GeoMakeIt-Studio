import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmNewAccountComponent } from './confirm-new-account.component';

describe('ConfirmNewAccountComponent', () => {
  let component: ConfirmNewAccountComponent;
  let fixture: ComponentFixture<ConfirmNewAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmNewAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmNewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
