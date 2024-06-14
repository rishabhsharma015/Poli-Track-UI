import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authdashboardGuard } from './authdashboard.guard';

describe('authdashboardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authdashboardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
