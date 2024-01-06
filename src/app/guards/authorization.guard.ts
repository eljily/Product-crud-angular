import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppStateService } from '../services/app-state.service';

export const authorizationGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let appState = inject(AppStateService)
  if (appState.authState.roles.includes(route.data['requiredRoles'])){
  return true}
  else {
    router.navigateByUrl("/admin/notAuthorized")
    return false
  }
};
