import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginConfigsComponent } from './plugin-configs.component';

describe('PluginConfigsComponent', () => {
  let component: PluginConfigsComponent;
  let fixture: ComponentFixture<PluginConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginConfigsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
