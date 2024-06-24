import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const registerGuardGuard: CanActivateFn = (route, state) => {
  let authservice = inject(AuthService);
  return (authservice.getRegisteredEmail() !== '');
};
