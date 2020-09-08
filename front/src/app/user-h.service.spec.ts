import { TestBed } from '@angular/core/testing';

import { UserHService } from './user-h.service';

describe('UserHService', () => {
  let service: UserHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
