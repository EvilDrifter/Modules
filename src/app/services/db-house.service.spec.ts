import { TestBed } from '@angular/core/testing';

import { DbHouseService } from './db-house.service';

describe('DbHouseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbHouseService = TestBed.get(DbHouseService);
    expect(service).toBeTruthy();
  });
});
