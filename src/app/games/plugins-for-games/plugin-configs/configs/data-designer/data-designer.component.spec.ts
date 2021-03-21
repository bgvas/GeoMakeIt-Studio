import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDesignerComponent } from './data-designer.component';

describe('DataDesignerComponent', () => {
  let component: DataDesignerComponent;
  let fixture: ComponentFixture<DataDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDesignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
