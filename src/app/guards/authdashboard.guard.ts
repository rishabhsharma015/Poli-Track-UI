import { CanActivateFn } from '@angular/router';
import { AdminauthService } from '../services/adminauth.service';
import { inject } from '@angular/core';

export const authdashboardGuard: CanActivateFn = (route, state) => {
  let adminauthservice = inject(AdminauthService);

  return adminauthservice.getLoginStatus();
};
