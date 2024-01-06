import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppStateService } from '../services/app-state.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let appState = inject(AppStateService)
  if(appState.authState.isAuthenticated){
    return true;
  }
  router.navigateByUrl("/login")
  return false
};
