import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authboothListGuard } from './authbooth-list.guard';

describe('authboothListGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authboothListGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
