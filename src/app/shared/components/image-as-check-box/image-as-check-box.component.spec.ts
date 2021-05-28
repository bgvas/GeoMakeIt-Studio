import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAsCheckBoxComponent } from './image-as-check-box.component';

describe('ImageAsCheckBoxComponent', () => {
  let component: ImageAsCheckBoxComponent;
  let fixture: ComponentFixture<ImageAsCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAsCheckBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAsCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
