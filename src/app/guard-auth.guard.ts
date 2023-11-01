import { CanActivateFn } from '@angular/router';

export const guardAuthGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token')) {
    return true;
  }
  alert('Vous n\'avez pas le droit d\'accéder à cette page')
  return false;
};
