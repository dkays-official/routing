import { TestBed } from '@angular/core/testing';

import { StoragemanagementService } from './storagemanagement.service';

describe('StoragemanagementService', () => {
  let service: StoragemanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoragemanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
