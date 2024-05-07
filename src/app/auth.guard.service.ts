import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, NavigationStart, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(private router: Router) {
 
  }
    canActivate():boolean{
        
        if (!localStorage.getItem('admin')) {
            // Rediriger vers la page de connexion si la valeur n'est pas présente
            this.router.navigate(['/login']);
            return false
          }
        return true
    }
}