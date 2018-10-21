import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerModuleComponent } from './timer-module.component';

describe('TimerModuleComponent', () => {
  let component: TimerModuleComponent;
  let fixture: ComponentFixture<TimerModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
