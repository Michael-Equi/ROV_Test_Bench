import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryCameraModuleComponent } from './secondary-camera-module.component';

describe('SecondaryCameraModuleComponent', () => {
  let component: SecondaryCameraModuleComponent;
  let fixture: ComponentFixture<SecondaryCameraModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryCameraModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryCameraModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
