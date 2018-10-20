import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCameraModuleComponent } from './main-camera-module.component';

describe('MainCameraModuleComponent', () => {
  let component: MainCameraModuleComponent;
  let fixture: ComponentFixture<MainCameraModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCameraModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCameraModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
