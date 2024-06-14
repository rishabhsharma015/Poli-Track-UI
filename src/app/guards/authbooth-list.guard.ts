import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authboothListGuard: CanActivateFn = (route, state) => {
  let authservice = inject(AuthService)
  return authservice.getLoginStatus();
};
