import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrusterSensativityComponent } from './thruster-sensativity.component';

describe('ThrusterSensativityComponent', () => {
  let component: ThrusterSensativityComponent;
  let fixture: ComponentFixture<ThrusterSensativityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrusterSensativityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrusterSensativityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
