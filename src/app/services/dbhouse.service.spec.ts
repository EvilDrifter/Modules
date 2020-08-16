import { TestBed } from '@angular/core/testing';

import { DbhouseService } from './dbhouse.service';

describe('DbhouseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbhouseService = TestBed.get(DbhouseService);
    expect(service).toBeTruthy();
  });
});
