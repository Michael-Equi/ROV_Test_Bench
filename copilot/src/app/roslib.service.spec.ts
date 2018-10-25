import { TestBed, inject } from '@angular/core/testing';

import { DriveControlService } from './services/drive-control.service';

describe('DriveControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DriveControlService]
    });
  });

  it('should be created', inject([DriveControlService], (service: DriveControlService) => {
    expect(service).toBeTruthy();
  }));
});
