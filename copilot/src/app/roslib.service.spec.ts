import { TestBed, inject } from '@angular/core/testing';

import { RoslibService } from './roslib.service';

describe('RoslibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoslibService]
    });
  });

  it('should be created', inject([RoslibService], (service: RoslibService) => {
    expect(service).toBeTruthy();
  }));
});
