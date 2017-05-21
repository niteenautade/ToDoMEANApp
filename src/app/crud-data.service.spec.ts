import { TestBed, inject } from '@angular/core/testing';

import { NitDataService } from './nit-data.service';

describe('NitDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NitDataService]
    });
  });

  it('should be created', inject([NitDataService], (service: NitDataService) => {
    expect(service).toBeTruthy();
  }));
});
